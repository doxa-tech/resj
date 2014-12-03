require "rails_helper"

RSpec.describe OratorsController, :type => :controller do

  describe "GET #new with an orator's account" do
    it "should redirect with a flash message" do
      sign_in create(:orator).user

      token = build(:access_token) do |token|
        token.ownership = create(:ownership, element_name: 'orators', group_name: 'g_token', right_create: true)
        token.save
      end

      get :new, token: token.token
      expect(response).to redirect_to root_path
      expect(flash[:error]).to eq "Vous êtes déjà un orateur."
    end
  end
end