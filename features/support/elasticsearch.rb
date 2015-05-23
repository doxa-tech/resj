Before('@elasticsearch') do 
  execute_rake('elasticsearch_import.rake', 'environment elasticsearch:import:all FORCE=true')
end

Before('~@elasticsearch') do
  FakeWeb.register_uri :any, %r(#{Elasticsearch::Model.client.transport.options[:host]}), body: '{}' 
end

After('~@elasticsearch') do
  FakeWeb.clean_registry
end

Before('~@elasticsearch') do
  module EsMock
    def self.included(base)
      base.instance_eval do
        def search(params)
          []
        end
      end
    end
  end
  [Card, Orator, Subject].each do |model|
    model.send(:include, EsMock)
  end
end