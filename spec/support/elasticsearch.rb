require 'es_mock'

RSpec.configure do |config|

  config.before(:suite) do
    
    [Card, Orator, Subject].each do |model|
      model.send(:prepend, EsMock)
    end

  end

end