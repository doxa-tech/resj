require 'es_mock'

Before('@elasticsearch') do 
  execute_rake('elasticsearch_import.rake', 'environment elasticsearch:import:all FORCE=true')
end

[Card, Subject, Orator].each do |model|

  model.send(:prepend, EsMock)

end