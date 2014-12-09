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
  # Disconnect since the database connection will not carry over
  if defined? ActiveRecord::Base
    ActiveRecord::Base.connection.disconnect!
  end

  # Quit the old unicorn process
  old_pid = "#{server.config[:pid]}.oldbin"
  if File.exists?(old_pid) && server.pid != old_pid
    begin
      Process.kill("QUIT", File.read(old_pid).to_i)
    rescue Errno::ENOENT, Errno::ESRCH
      # someone else did our job for us
    end
  end
end

after_fork do |server, worker|
  # Start up the database connection again in the worker
  if defined?(ActiveRecord::Base)
    ActiveRecord::Base.establish_connection
  end
end

root = "<%= current_path %>"
working_directory root
pid "#{root}/tmp/pids/unicorn.pid"
stderr_path "#{root}/log/unicorn.log"
stdout_path "#{root}/log/unicorn.log"

listen "/tmp/unicorn.<%= fetch(:full_app_name) %>.sock"
worker_processes <%= fetch(:unicorn_worker_count) %>
timeout 40
preload_app true

# Force unicorn to look at the Gemfile in the current_path
# otherwise once we've first started a master process, it
# will always point to the first one it started.
before_exec do |server|
  ENV['BUNDLE_GEMFILE'] = "<%= current_path %>/Gemfile"
end

before_fork do |server, worker|
   defined?(ActiveRecord::Base) and
    ActiveRecord::Base.connection.disconnect!
  # Quit the old unicorn process
  old_pid = "#{server.config[:pid]}.oldbin"
  if File.exists?(old_pid) && server.pid != old_pid
    puts "We've got an old pid and server pid is not the old pid"
    begin
      Process.kill("QUIT", File.read(old_pid).to_i)
      puts "killing master process (good thing tm)"
    rescue Errno::ENOENT, Errno::ESRCH
      puts "unicorn master already killed"
    end
  end
end

after_fork do |server, worker|
  port = 5000 + worker.nr
  child_pid = server.config[:pid].sub('.pid', ".#{port}.pid")
  system("echo #{Process.pid} > #{child_pid}")
   defined?(ActiveRecord::Base) and
    ActiveRecord::Base.establish_connection
end