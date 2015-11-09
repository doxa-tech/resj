namespace :deploy do
  desc "Create and update the config files"
  task :setup_config do
    on roles(:app) do

      application = fetch(:application)
      execute :mkdir, "-p #{shared_path}/config"
      execute :mkdir, "-p #{shared_path}/server"

      fetch(:linked_files).each do |filename|
        unless test("[ -f #{shared_path}/#{filename} ]")
          begin
            file = StringIO.new(ERB.new(File.read("config/deploy/#{filename}.erb")).result(binding)) # render .erb files
          rescue
            file = "config/deploy/#{filename}"
          end
          upload! file, "#{shared_path}/#{filename}"
        end
      end

      fetch(:server_files).each do |file|
        raw_filename = file[:name].gsub(/.erb/, '')
        file_path = "#{shared_path}/server/#{raw_filename}"
        eval_file = StringIO.new(ERB.new(File.read("config/deploy/server/#{file[:name]}")).result(binding)) # render .erb files
        upload! eval_file, file_path # upload to the remote server
        execute :chmod, "+x #{file_path}" if file[:executable] # make executable if needed
        execute :chmod, "#{file[:permission]} #{file_path}" if file[:permission] # change permission if needed
        sudo :ln, "-nfs #{file_path} #{file[:path]}" # symlinks
      end

      # reload /etc/init
      sudo :initctl, "reload-configuration"
    end
  end
end