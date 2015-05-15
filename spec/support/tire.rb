 module TireMock
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
      Rake::Task['environment tire:import:all'].invoke
      example.run
    else
      FakeWeb.register_uri :any, %r(#{Tire::Configuration.url}), body: '{}'
      
      [Card, Orator, Subject].each do |model|
        model.send(:include, TireMock)
      end

      example.run
      FakeWeb.clean_registry

    end
  end

end