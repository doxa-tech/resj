namespace :tasks do  
  desc "Run a task on a remote server."  
  task :invoke do
    on roles(:app) do
      within current_path do
        execute :bundle, :exec, :rake, "#{ENV['task']} RAILS_ENV=#{fetch(:rails_env)}"
      end
    end
  end  
end