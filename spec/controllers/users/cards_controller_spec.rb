require 'rails_helper'

module Users

  RSpec.describe CardsController, type: :controller do

    describe "#transfer" do

      it "transfer the card to another user" do
        @card = create(:card, status: nil)
        request.cookies[:remember_token] = @card.user.remember_token
        email = "another@bar.com"
        @another_user = create(:user, email: email, confirmed: true)
        post :transfer, params: { id: @card.id, email: email }
        @card.reload
        expect(@card.user).to eq @another_user
      end

      it "does not transfer the card" do
        @card = create(:card, status: nil)
        @user = @card.user
        request.cookies[:remember_token] = @user.remember_token
        post :transfer, params: { id: @card.id, email: "nil@bar.com" }
        @card.reload
        expect(@card.user).to eq @user
      end

    end

  end

end