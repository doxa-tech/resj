require 'rails_helper'
require 'controllers/shared_examples_for_admin_controller'

RSpec.describe Admin::UsersController, :type => :controller do

  describe "POST #invite" do

    it "should send emails" do
      expect { post :invite, emails: ["kocher.ke@gmail.com"], users: ["nkcr.je@gmail.com"] }.to change { ActionMailer::Base.deliveries.count }.by(1)
    end

  end

end