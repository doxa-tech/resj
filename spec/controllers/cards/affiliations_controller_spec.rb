require "rails_helper"

RSpec.describe Cards::AffiliationsController, :type => :controller do

  describe "GET #team" do
    let(:card) { create(:card) }
    let(:response) { get :team, params: { card_id: card }}

    it "should allow a authorized user" do
      user = create(:user)
      create(:ownership, user: user, element_name: "cards/affiliations", right_update: true, id_element: card.id, type_name: "on_entry")
      sign_in user
      expect(response.status).to eq 200
    end

    it "should not allow a visitor" do
      expect(response).to redirect_to connexion_path
    end

    it "should not allow a user" do
      user = create(:user)
      sign_in user
      expect(response).to redirect_to connexion_path
    end

  end
end
