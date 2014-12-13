if !Rails.env.development? && !Rails.env.test?
  Sunspot.config.solr.url = "http://tomcat:#{Rails.application.secrets.basic_pswd}@localhost:8080/solr"
end