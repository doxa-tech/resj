root = "/home/resj/apps/resj/current"
working_directory root
pid "#{root}/tmp/pids/unicorn.pid"
stderr_path "#{root}/log/unicorn.log"
stdout_path "#{root}/log/unicorn.log"
 
listen "/tmp/unicorn.resj.sock"
worker_processes 2
timeout 30
 
before_exec do |server|
  ENV['BUNDLE_GEMFILE'] = "/home/resj/apps/resj/current/Gemfile"
end

preload_app true

before_fork do |server, worker|
  defined?(ActiveRecord::Base) and
    ActiveRecord::Base.connection.disconnect!

  old_pid = "#{server.config[:pid]}.oldbin"
  if File.exists?(old_pid) && server.pid != old_pid
    begin
      Process.kill("QUIT", File.read(old_pid).to_i)
    rescue Errno::ENOENT, Errno::ESRCH
    end
  end
end

after_fork do |server, worker|
  ActiveRecord::Base.establish_connection
  ActiveRecord::Base.verify_active_connections!
end