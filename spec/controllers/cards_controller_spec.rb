require "rails_helper"

RSpec.describe CardsController, :type => :controller do

  describe "GET #overview" do
    let(:card) { create(:card) }

    it "should allow a authorized user" do 
      user = create(:user)
      create(:ownership, user: user, element_name: "cards", right_update: true, id_element: card.id, type_name: "on_entry")
      sign_in user
      get :overview, id: card
      expect(response.status).to eq 200
    end

    it "should not allow a visitor" do
      get :overview, id: card
      expect(response.status).to eq 302
    end

    it "should redirect to the team page" do
      user = create(:user)
      sign_in user
      get :overview, id: card
      expect(response).to redirect_to card_team_path(card)
    end
    
  end
end