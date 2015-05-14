require 'rails_helper'
require 'controllers/shared_examples_for_admin_controller'

RSpec.describe Admin::UsersController, :type => :controller do

  describe "POST #invite" do

    before(:each) do
      @user = create(:user)
      create(:ownership, element_name: "admin/users", type_name: "all_entries", 
        right_read: true, right_create: true, right_delete: true, right_update: true)
      sign_in @user
      post :invite, emails: "kocher.ke@gmail.com", users: ["nkcr.je@gmail.com"] 
    end

    it "should send emails" do
      expect(ActionMailer::Base.deliveries.last.to).to include "kocher.ke@gmail.com", "nkcr.je@gmail.com"
    end

    it "should contain the link with a token" do
      expect(ActionMailer::Base.deliveries.last.to_s).to include "/resources/orators/new?token=#{AccessToken.last.token}" 
    end

    it "should contain the sender's full name" do
      expect(ActionMailer::Base.deliveries.last.to_s).to include @user.full_name
    end

  end

end