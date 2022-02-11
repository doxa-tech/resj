require 'rails_helper'

RSpec.describe OratorsController, type: :controller do

  describe "#new" do
    
    it "should not be an orator" do
      sign_in_orator
      get :new, params: { token: create_orator_token }
      expect(flash[:error]).to eq "Vous êtes déjà un orateur" 
    end

  end

  describe "#create" do

    it "should not be an orator" do
      sign_in_orator
      get :new, params: { token: create_orator_token }
      expect(flash[:error]).to eq "Vous êtes déjà un orateur" 
    end

  end

  describe "#edit" do
    
    it "should be an orator" do
      get :edit
      expect(flash[:error]).to eq "Vous n'êtes pas autorisé"
    end

  end

  describe "#update" do

    it "should be an orator" do
      patch :update
      expect(flash[:error]).to eq "Vous n'êtes pas autorisé"
    end

  end

  describe "#destroy" do

    it "should be an orator" do
      delete :destroy
      expect(flash[:error]).to eq "Vous n'êtes pas autorisé"
    end

    it "deletes an orator" do
      @orator = create(:orator)
      request.cookies[:remember_token] = @orator.user.remember_token
      expect{
        delete :destroy
      }.to change{Orator.count}.by(-1)
    end

  end

end

def sign_in_orator
  @orator = create(:orator)
  request.cookies[:remember_token] = @orator.user.remember_token
end

def create_orator_token
  permission = create(:permission, element_name: "orators", create_right: true)
  token = create(:token, permission: permission)
  token.token
end