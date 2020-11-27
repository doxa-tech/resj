ES_CONFIG = YAML.load_file("#{Rails.root}/config/elasticsearch.yml")[Rails.env]

Elasticsearch::Model.client = Elasticsearch::Client.new host: "#{ES_CONFIG['host']}:#{ES_CONFIG['port']}"