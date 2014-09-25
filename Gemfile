source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.5'

# Use sqlite3 as the database for Active Record
gem 'sqlite3', '~> 1.3.9', group: :development
gem 'pg', '~> 0.17.1', group: :production


# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '~> 2.0.0'


# Use jquery as the JavaScript library
gem 'jquery-rails', '~> 3.1.0'
gem 'jquery-ui-rails', '~> 4.2.0'
# add the jquery plugin selectize.js
gem "selectize-rails", '~> 0.9.0'
# CK Editor WYSIWYG
gem 'ckeditor_rails', '~> 4.3.1'
# Jquery select plugin
gem 'multi-select-rails'
# Paloma JS integration
gem 'paloma'
# Coffee script
gem 'coffee-rails'


# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks', '~> 2.2.1'
# Add compatibility between JS events and Turbolinks
gem 'jquery-turbolinks', '~> 2.0.2'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0.5'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end


# Use ActiveModel has_secure_password
gem 'bcrypt-ruby', '~> 3.1.0'

# Use unicorn as the app server
gem 'unicorn', '~> 4.8.2'
gem 'unicorn-worker-killer'

# Use Capistrano for deployment

group :development do
	gem 'capistrano', '~> 2.15'
	gem 'railroady'
	gem "rails-erd"
end

# Use debugger
# gem 'debugger', group: [:development, :test]

# pagination
gem 'will_paginate', '~> 3.0.5'

# search
gem 'sunspot_rails', '~> 2.1.0'
gem 'sunspot_solr', group: :development

# config
gem "figaro", '~> 0.7.0'


# image & video uploader
gem 'carrierwave', '~> 0.10.0'
gem 'carrierwave-processing', '~> 1.0.0'
gem "fog", "~> 1.20.0"
# image manipulating
gem "mini_magick", '~> 3.7.0'


# new relic
gem 'newrelic_rpm', '~> 3.7.3.204'

gem 'activerecord-session_store', github: 'rails/activerecord-session_store'

group :development, :test do
	gem 'rspec-rails'
	gem 'cucumber-rails', require: false
	gem 'database_cleaner'
	gem 'selenium-webdriver'
end