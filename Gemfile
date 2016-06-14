source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.5'

# Use postgres as the database for Active Record
gem 'pg', '~> 0.18.2'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier'

# Use jquery as the JavaScript library
gem 'jquery-rails', '~> 4.1.0'
gem 'jquery-ui-rails', '~> 5.0.0'
# add the jquery plugin selectize.js
gem 'selectize-rails'
# Jquery select plugin
gem 'multi-select-rails'
# Coffee script
gem 'coffee-rails'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0.3'
# Mapbox
gem 'mapbox-rails'
# AngularJS
gem 'angularjs-rails'


# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks', '~> 2.5.3'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end


# Use ActiveModel has_secure_password
gem 'bcrypt'

# Use puma as the app server
gem 'puma'

group :development do

    # Use Capistrano for deployment
    gem 'capistrano', '~> 3.4.0'
    gem 'capistrano-maintenance', github: 'capistrano/maintenance', require: false
    gem 'capistrano-server', github: 'JS-Tech/capistrano-server'

    # rails specific capistrano funcitons
    gem 'capistrano-rails'

    # integrate bundler with capistrano
    gem 'capistrano-bundler'

    # if you are using RBENV
    gem 'capistrano-rvm'
end

group :development do
	gem 'railroady'
	gem 'rails-erd'
	gem 'quiet_assets'
	gem 'bullet'
	gem 'meta_request'
	gem 'active_record_query_trace'
	gem 'web-console'
	gem 'spring'
    gem 'rails-dev-boost', :git => 'git://github.com/thedarkone/rails-dev-boost.git'
    gem 'rb-fsevent', '>= 0.9.1' # goes with rails-dev-boost
end

# Use debugger
# gem 'debugger', group: [:development, :test]

# pagination
gem 'will_paginate', '~> 3.1.0'

# search
gem 'elasticsearch-model'
gem 'elasticsearch-rails'

# image & video uploader
gem 'carrierwave', '~> 0.11.0'
gem 'carrierwave-processing'
gem 'fog', '~> 1.37.0'
# image manipulating
gem 'mini_magick', '~> 4.5.0'

# new relic
gem 'newrelic_rpm'

gem 'activerecord-session_store'

group :development, :test do
	gem 'rspec-rails'
	gem 'cucumber-rails', require: false
	gem 'database_cleaner'
	gem 'capybara-webkit'
	gem 'selenium-webdriver'
	gem 'factory_girl_rails'
	gem 'email_spec'
	gem 'faker'
	gem 'timecop'
end

gem 'coveralls', require: false

# HTML tables
gem 'snaptable', '< 1.0.0'

# errors tracking
gem 'rollbar'

# use mailgun api
gem 'mailgun'
