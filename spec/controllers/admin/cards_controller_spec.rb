require 'rails_helper'

RSpec.describe Admin::CardsController, :type => :controller do

  describe "POST #create" do

    before(:each) do
      sign_in @user = User.find_by_email("kocher.ke@gmail.com")
      @affiliation = create(:card_affiliation)
      @card_params = build(:card, user: nil).attributes.merge(responsables_attributes: {"0" => {firstname: "Keran", lastname: "Kocher", email: "kocher.ke@gmail.com", is_contact: "true"}})
    end

    it "should create or find the related actions" do
      params = @card_params.merge({affiliations_attributes: {"0" => {name: @affiliation.name}, "1" => {name: "Uptown"}}})
      post :create, card: params
      expect(Card.last.affiliations).to include(@affiliation, Affiliation.find_by_name("Uptown"))
    end
  end

end