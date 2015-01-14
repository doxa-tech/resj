require "rails_helper"

RSpec.describe Cards::AffiliationsController, :type => :controller do

  describe "GET #team" do
    let(:card) { create(:card) }

    it "should allow a authorized user" do 
      user = create(:user)
      create(:ownership, user: user, element_name: "cards/affiliations", right_update: true, id_element: card.id, type_name: "on_entry")
      sign_in user
      get :team, card_id: card
      expect(response.status).to eq 200
    end

    it "should not allow a visitor" do
      get :team, card_id: card
      expect(response.status).to eq 302
    end

    it "should not allow a user" do
      user = create(:user)
      sign_in user
      get :team, card_id: card
      expect(flash[:error]).to eq "Vous n'avez pas les droits pour éditer cette ressource."
    end
    
  end
end