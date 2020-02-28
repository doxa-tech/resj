source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.0'

# Use postgres as the database for Active Record
gem 'pg', '~> 0.21'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier'

# Use jquery as the JavaScript library
gem 'jquery-rails'
gem 'jquery-ui-rails'
# add the jquery plugin selectize.js
gem 'selectize-rails'
# Jquery select plugin
gem 'multi-select-rails'
# Coffee script
gem 'coffee-rails'
# Use SCSS for stylesheets
gem 'sass-rails'
# Mapbox
gem 'mapbox-rails', '~> 1.6.0'
# AngularJS
gem 'angularjs-rails', '~> 1.6.0'


# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks', '~> 5.1'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.6'

# Use ActiveModel has_secure_password
gem 'bcrypt'

# Use puma as the app server
gem 'puma', '~> 3.12'

group :development do

    # Use Capistrano for deployment
  gem 'capistrano', '3.6.1'

  gem 'capistrano-maintenance', require: false

  gem 'capistrano-server', git: 'https://github.com/JS-Tech/capistrano-server'

  # rails specific capistrano funcitons
  gem 'capistrano-rails'

  # integrate bundler with capistrano
  gem 'capistrano-bundler'

  # if you are using RBENV
  gem 'capistrano-rvm'

    # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console'
  gem 'listen'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen'
end

# Use debugger
# gem 'debugger', group: [:development, :test]

# pagination
gem 'will_paginate'

# search
gem 'elasticsearch-model'
gem 'elasticsearch-rails'

# image & video uploader
gem 'carrierwave', '~> 1.2.0'
gem 'carrierwave-i18n'
gem 'carrierwave-processing'

# google cloud adapter
gem 'fog-google'

# image manipulating
gem 'mini_magick'

gem 'activerecord-session_store'

group :development, :test do
	gem 'rspec-rails'
	gem 'cucumber-rails', require: false
	gem 'database_cleaner'
	gem 'capybara-webkit'
	gem 'selenium-webdriver', '~> 2.53.0'
	gem 'factory_bot_rails'
	gem 'email_spec'
	gem 'faker'
	gem 'timecop'
  gem 'rails-controller-testing'
end

# HTML tables
gem 'snaptable'

# use mailgun api
gem 'mailgun'
