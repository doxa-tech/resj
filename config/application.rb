require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Resj
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'
    config.time_zone = 'Bern'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
    config.i18n.enforce_available_locales = true
    config.i18n.default_locale = :fr

    # Disable generators
    config.generators do |g|
      g.orm             :active_record
      g.template_engine :erb
      g.test_framework  :rspec, fixture: false
      g.stylesheets     false
      g.javascripts     false
      g.helper          false
      g.factory_bot    false
    end

    # for exceptions (404, ...)
    config.exceptions_app = self.routes

    config.paths.add "app/models", eager_load: true, glob: "*"
  end
end
