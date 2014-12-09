namespace :deploy do
  desc "Create and update the config files"
  task :setup_config do
    on roles(:app) do

      application = fetch(:application)
      execute :mkdir, "-p #{shared_path}/config"
      execute :mkdir, "-p #{shared_path}/server"

      (fetch(:linked_files) + fetch(:config_files)).each do |file|
        unless test("[ -f #{shared_path}/#{file} ]")
          upload! "config/deploy/#{file}", "#{shared_path}/#{file}"
        end
      end

      fetch(:server_files).each do |file|
        raw_filename = file[:name].gsub(/.erb/, '')
        file_path = "#{shared_path}/server/#{raw_filename}"
        eval_file = StringIO.new(ERB.new(File.read("config/deploy/server/#{file[:name]}")).result(binding)) # render .erb files
        sudo "rm #{file_path}" if test("[ -f #{file_path} ]") # avoid conflits and permission's problems
        upload! eval_file, file_path # upload to the remote server
        execute :chmod, "+x #{file_path}" if file[:executable] # make executable if needed
        sudo :chown, "#{file[:owner]} #{file_path}" if file[:owner] # change owner if needed
        sudo :ln, "-nfs #{file_path} #{file[:path]}" # symlinks
      end
    end
  end
end