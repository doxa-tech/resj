CONFIG = YAML.load_file("#{Rails.root}/config/deploy/config/elasticsearch.yml")[Rails.env]

Elasticsearch::Model.client = Elasticsearch::Client.new host: "#{CONFIG['host']}:#{CONFIG['port']}"