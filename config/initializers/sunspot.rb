if !Rails.env.development? && !Rails.env.test?
  Sunspot.config.solr.url = "http://#{Rails.application.secrets.tomcat_user}:#{Rails.application.secrets.tomcat_pswd}@localhost:8080/solr"
end