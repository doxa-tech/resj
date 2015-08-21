source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.1'

# Use postgres as the database for Active Record
gem 'pg', '~> 0.18.2'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '~> 2.7.1'

# Use jquery as the JavaScript library
gem 'jquery-rails', '~> 4.0.1'
gem 'jquery-ui-rails', '~> 5.0.0'
# add the jquery plugin selectize.js
gem 'selectize-rails'
# Jquery select plugin
gem 'multi-select-rails'
# Paloma JS integration
gem 'paloma', '~> 4.2.0'
# Coffee script
gem 'coffee-rails', '~> 4.1.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0.3'
# Mapbox
gem 'mapbox-rails'


# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks', '~> 2.5.3'
# Add compatibility between JS events and Turbolinks
gem 'jquery-turbolinks', '~> 2.1.0'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.2.16'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end


# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

# Use unicorn as the app server
gem 'unicorn'
gem 'unicorn-worker-killer'

# Use Capistrano for deployment
gem 'capistrano', '~> 3.4.0'
gem 'capistrano-maintenance', github: 'capistrano/maintenance', require: false

# rails specific capistrano funcitons
gem 'capistrano-rails'

# integrate bundler with capistrano
gem 'capistrano-bundler'

# if you are using RBENV
gem 'capistrano-rvm'

group :development do
	gem 'railroady'
	gem 'rails-erd'
	gem 'quiet_assets'
	gem 'bullet'
	gem 'meta_request'
	gem 'active_record_query_trace'
	gem 'web-console'
	gem 'spring'
end

# Use debugger
# gem 'debugger', group: [:development, :test]

# pagination
gem 'will_paginate', '~> 3.0.5'

# search
gem 'elasticsearch-model'
gem 'elasticsearch-rails'

# image & video uploader
gem 'carrierwave', '~> 0.10.0'
gem 'carrierwave-processing'
gem 'fog', '~> 1.30.0'
# image manipulating
gem 'mini_magick', '~> 4.2.1'

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
  gem 'rails-dev-boost', :git => 'git://github.com/thedarkone/rails-dev-boost.git'
  gem 'rb-fsevent', '>= 0.9.1' # goes with rails-dev-boost
end

gem 'coveralls', require: false

# HTML tables
gem 'snaptable'

# AngularJS
gem 'angularjs-rails'
