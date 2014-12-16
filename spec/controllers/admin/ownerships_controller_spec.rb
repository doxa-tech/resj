require 'rails_helper'

RSpec.describe Admin::OwnershipsController, :type => :controller do

  describe "POST #create" do

    before(:each) do
      sign_in @user = User.find_by_email("kocher.ke@gmail.com")
      @action = create(:action)
      @ownership_params = build(:ownership, user: @user).attributes
    end

    it "should create or find the related actions" do
      params = @ownership_params.merge({actions_attributes: {"0" => {name: @action.name}, "1" => {name: "team"}}})
      post :create, ownership: params
      expect(Ownership.last.actions).to include(@action, Action.find_by_name("team"))
    end
  end

end