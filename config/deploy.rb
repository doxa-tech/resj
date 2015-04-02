# config valid only for current version of Capistrano
lock '3.3.5'

set :application, 'resj'
set :deploy_user, 'resj'

set :scm, "git"
set :repo_url, 'git@github.com:JS-Tech/resj.git'

# Default branch is :master
ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }.call

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/home/#{fetch(:deploy_user)}/apps/#{fetch(:application)}"

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, false

set :server_files, [
  {
    name: 'nginx.conf.erb',
    path: "/etc/nginx/sites-enabled/#{fetch(:application)}",
  },
  {
    name: 'unicorn_init.sh.erb',
    path: "/etc/init.d/unicorn_#{fetch(:application)}",
    executable: true
  }
]

# Default value for :linked_files is []
# set :linked_files, fetch(:linked_files, []).push('config/database.yml')
set :linked_files, %w{config/database.yml config/secrets.yml config/unicorn.rb}

# Default value for linked_dirs is []
set :linked_dirs, %w{log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}

set :bundle_binstubs, nil

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
set :keep_releases, 5

set :maintenance_template_path, "config/deploy/templates/maintenance.html.erb"


namespace :deploy do
  # make sure we're deploying what we think we're deploying
  before :deploy, "deploy:check_revision"

  # cleanup
  after :finishing, 'deploy:cleanup'

  before 'deploy:started', 'deploy:setup_config'

  # reload nginx to it will pick up any modified vhosts from
  # setup_config
  after 'deploy:setup_config', 'nginx:reload'

  # As of Capistrano 3.1, the `deploy:restart` task is not called
  # automatically.
  after 'deploy:publishing', 'deploy:restart'

  after 'deploy:finished', 'tire:reindex'
  
end
