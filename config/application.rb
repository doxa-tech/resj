require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Resj
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    config.generators do |g|
      g.test_framework  nil
      g.stylesheets     false
      g.javascripts     false
      g.helper          false
      g.factory_bot     false
    end

    config.i18n.default_locale = :fr
    config.time_zone = 'Bern'
    config.i18n.available_locales = :fr

    # custom error pages
    config.exceptions_app = self.routes

    config.site_version = ENV['SITE_VERSION'] || "v0.0.0"
    config.site_build_hash = ENV['SITE_BUILD_HASH'] || "xxx"
    config.site_build_url = ENV['SITE_BUILD_URL'] || "#"
    config.site_build_time = ENV['SITE_BUILD_TIME'] || "1/1/70 00:00"
  end
end
