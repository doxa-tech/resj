module TireIndexing
  def self.models
    [Card, Orator, Subject]
  end

  def self.create_index
    puts "======================"
    puts "[Tire] Start indexing"
    TireIndexing.models.each do |model|
      TireIndexing.import_model(model, force: true)
    end
    puts "[Tire] Finish indexing"
    puts "======================"
  end

  def self.import_model(klass, force: false)
    index = klass.tire.index
    begin
      Tire::Tasks::Import.add_pagination_to_klass(klass)

      Tire::Tasks::Import.delete_index(index) if force
      Tire::Tasks::Import.create_index(index, klass)

      Tire::Tasks::Import.import_model(index, klass, {})
    rescue Errno::ECONNREFUSED
      puts "Elastic search server not found"
      Process.exit(0)
    end
  end
end

Before('@tire') do 
  TireIndexing.create_index
end

Before('~@tire') do
  FakeWeb.register_uri :any, %r(#{Tire::Configuration.url}), body: '{}' 
end

After('~@tire') do
  FakeWeb.clean_registry
end

Before('~@tire') do
  module TireMock
    def self.included(base)
      base.instance_eval do
        def search(params)
          []
        end
      end
    end
  end
  [Card, Orator, Subject].each do |model|
    model.send(:include, TireMock)
  end
end