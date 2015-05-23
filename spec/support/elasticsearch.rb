 module EsMock
  def self.included(base)
    base.instance_eval do
      def search(params)
        []
      end
    end
  end
end

RSpec.configure do |config|

  config.around :each do |example|
    if example.metadata[:elasticsearch]
      Rails.application.load_tasks
      Rake::Task['environment elasticsearch:import:all FORCE=true'].invoke
      example.run
    else
      FakeWeb.register_uri :any, %r(#{Elasticsearch::Model.client.transport.options[:host]}), body: '{}'
      
      [Card, Orator, Subject].each do |model|
        model.send(:include, EsMock)
      end

      example.run
      FakeWeb.clean_registry

    end
  end

end