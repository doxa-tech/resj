namespace :elasticsearch do
  desc "Create and update the config files"
  task :reindex do
    on roles(:app) do
      within current_path do
        begin
          execute :bundle, :exec, :rake, "RAILS_ENV=#{fetch(:rails_env)} environment elasticsearch:import:all FORCE=true"
        rescue
          puts "Failed to import"
        end
      end
    end
  end

  task :restart do
    on roles(:app) do
      sudo "/etc/init.d/elasticsearch restart"
    end
  end
end