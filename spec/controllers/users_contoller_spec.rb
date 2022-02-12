require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "#new" do

    it "requires to be logged out" do
      sign_in
      get :new
      expect(flash[:success]).to eq "Tu es déjà connecté"
    end

  end

  describe "#create" do

    it "requires to be logged out" do
      sign_in
      post :create
      expect(flash[:success]).to eq "Tu es déjà connecté"
    end

  end

  describe "#edit" do

    it "requires to be logged in" do
      get :edit
      expect(flash[:error]).to eq "Connecte-toi avant d'accéder à cette page"
    end

  end

  describe "#update" do

    it "requires to be logged in" do
      patch :update
      expect(flash[:error]).to eq "Connecte-toi avant d'accéder à cette page"
    end

  end

  describe "#destroy" do

    it "deletes an user" do
      sign_in
      expect{
        delete :destroy
      }.to change{User.count}.by(-1)
    end

    it "requires to be logged in" do
      delete :destroy
      expect(flash[:error]).to eq "Connecte-toi avant d'accéder à cette page"
    end

  end

  describe "#confirmation" do

    it "confirms the user" do
      @user = create(:user, confirmed: false)
      get :confirmation, params: { token: @user.remember_token }
      @user.reload
      expect(@user.confirmed).to be true
    end

  end

end

def sign_in
  @user = create(:user, confirmed: true)
  request.cookies[:remember_token] = @user.remember_token
end