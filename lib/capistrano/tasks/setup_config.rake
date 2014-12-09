namespace :deploy do
  desc "Create and update the config files"
  task :setup_config do
    on roles(:app) do

      application = fetch(:application)
      execute :mkdir, "-p #{shared_path}/config"
      execute :mkdir, "-p #{shared_path}/server"

      fetch(:linked_files).each do |file|
        unless test("[ -f #{shared_path}/#{file} ]")
          upload! "config/deploy/#{file}", "#{shared_path}/#{file}"
        end
      end

      fetch(:server_files).each do |file|
        file_path = "#{shared_path}/server/#{file[:name]}"
        upload! "config/deploy/server/#{file[:name]}", file_path
        execute :chmod, "+x #{file_path}" if file[:executable]
        sudo :ln, "-nfs #{file_path} #{file[:path]}"
      end
    end
  end
end