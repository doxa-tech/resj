require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "#destroy" do

    it "deletes an user" do
      @user = create(:user, confirmed: true)
      request.cookies[:remember_token] = @user.remember_token
      expect{
        delete :destroy, params: {id: @user.id}
      }.to change{User.count}.by(-1)
    end

  end

  describe "#confirmation" do

    it "it confirms the user" do
      @user = create(:user, confirmed: false)
      get :confirmation, params: { token: @user.remember_token }
      @user.reload
      expect(@user.confirmed).to be true
    end

  end

end