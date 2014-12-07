require "rails_helper"

RSpec.describe OratorsController, :type => :controller do

  describe "GET #new" do

    before(:each) do
      @token = build(:access_token) do |token|
        token.ownership = create(:ownership, element_name: 'orators', group_name: 'g_token', right_create: true)
        token.save
      end
    end

    context "when orator" do
      before(:each) do
        sign_in create(:orator).user
      end

      it "should redirect" do
        get :new, token: @token.token 
        expect(response).to redirect_to root_path
      end

      it "should display a flash" do
        get :new, token: @token.token 
        expect(flash[:error]).to eq "Vous êtes déjà un orateur."
      end
    end

    context "when user" do
      it "should be ok" do
        sign_in create(:user)
        get :new, token: @token.token 
        expect(response.status).to eq 200
      end
    end

    context "when not signed in" do
      it "should be ok" do
        get :new, token: @token.token 
        expect(response.status).to eq 200
      end
    end
  end
end