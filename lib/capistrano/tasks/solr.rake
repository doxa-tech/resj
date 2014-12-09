namespace :deploy do
  desc "Create and update the config files"
  task :solr do
    on roles(:app) do

      within current_path do
        execute :bundle, :exec, :rake, "RAILS_ENV=#{fetch(:rails_env)} sunspot:reindex"
      end

      sudo "service tomcat7 restart"
    end
  end
end