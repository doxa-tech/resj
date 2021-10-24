require 'factory_bot'
require_relative '../../factories.rb'

class OratorMailerPreview < ActionMailer::Preview
  def migration
    orator = FactoryBot.build(:orator)
    OratorMailer.migration(orator)
  end
end
