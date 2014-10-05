require "bundler/capistrano"
 
server "146.185.183.84:77", :web, :app, :db, primary: true
 
set :application, "resj"
set :user, "resj"
set :deploy_to, "/home/#{user}/apps/#{application}"
set :deploy_via, :remote_cache
set :use_sudo, false
 
set :scm, "git"
set :repository, "git@github.com:khcr/resj.git"
set :branch, "master"
 
default_run_options[:pty] = true
ssh_options[:forward_agent] = true
 
after "deploy", "deploy:cleanup" # keep only the last 5 releases
 
namespace :deploy do
  %w[start stop restart].each do |command|
    desc "#{command} unicorn server"
    task command, roles: :app, except: {no_release: true} do
      run "/etc/init.d/unicorn_#{application} #{command}"
    end
  end

  task :setup_config, roles: :app do
    sudo "ln -nfs #{current_path}/config/nginx.conf /etc/nginx/sites-enabled/#{application}"
    sudo "ln -nfs #{current_path}/config/unicorn_init.sh /etc/init.d/unicorn_#{application}"
    run "mkdir -p #{shared_path}/config"
    put File.read("config/database.example.yml"), "#{shared_path}/config/database.yml"
    put File.read("config/sunspot.example.yml"), "#{shared_path}/config/sunspot.yml"
    put File.read("config/secrets.example.yml"), "#{shared_path}/config/secrets.yml"
    puts "Now edit the config files in #{shared_path}."
  end
  after "deploy:setup", "deploy:setup_config"

  task :symlink_config, roles: :app do
    run "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml"
    run "ln -nfs #{shared_path}/config/sunspot.yml #{release_path}/config/sunspot.yml"
    run "ln -nfs #{shared_path}/config/secrets.yml #{release_path}/config/secrets.yml"
  end
  after "deploy:finalize_update", "deploy:symlink_config"

  task :reindex, roles: :app do
    run "cd #{release_path} && bundle exec rake RAILS_ENV=#{rails_env} sunspot:reindex"
  end
  after "deploy:finalize_update", "deploy:reindex"

  desc "Make sure local git is in sync with remote."
  task :check_revision, roles: :web do
    unless `git rev-parse HEAD` == `git rev-parse origin/master`
      puts "WARNING: HEAD is not the same as origin/master"
      puts "Run `git push` to sync changes."
      exit
    end
  end
  before "deploy", "deploy:check_revision"

  desc "Update SOLR config"
  task :update_solr, roles: :app do
    put File.read("config/solr/solrconfig.xml"), "/usr/share/solr/example/solr/collection1/conf/solrconfig.xml"
    put File.read("config/solr/schema.xml"), "/usr/share/solr/example/solr/collection1/conf/schema.xml"
    run "sudo /etc/init.d/tomcat7 restart"
  end

end