namespace :tire do
  desc "Create and update the config files"
  task :reindex do
    on roles(:app) do
      within current_path do
        execute :bundle, :exec, :rake, "RAILS_ENV=#{fetch(:rails_env)} environment tire:import:all FORCE=true"
      end
    end
  end

  task :restart, on_error: :continue do
    on roles(:app) do
      sudo "/etc/init.d/elasticsearch restart"
    end
  end
end