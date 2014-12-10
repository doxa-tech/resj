namespace :solr do
  desc "Create and update the config files"
  task :reindex do
    on roles(:app) do
      within current_path do
        execute :bundle, :exec, :rake, "RAILS_ENV=#{fetch(:rails_env)} sunspot:reindex"
      end
    end
  end

  task :restart do
    on roles(:app) do
      sudo "/etc/init.d/tomcat7 restart"
    end
  end
end