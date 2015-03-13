CONFIG = YAML.load_file("#{Rails.root}/config/elasticsearch.yml")[Rails.env]

Tire.configure do
  url "http://#{CONFIG['host']}:#{CONFIG['port']}"
end