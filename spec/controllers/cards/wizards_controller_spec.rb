require "rails_helper"

RSpec.describe Cards::WizardsController, :type => :controller do

  describe "POST #create" do

    let(:card_params) { build(:card, user: nil, status: nil).attributes }

    it "should create or find the associated responsables" do
      @responsable = create(:responsable)
      request.session[:card_params] = card_params.merge(responsables_attributes = {
        responsables_attributes: {
          "0" => {firstname: "Keran", lastname: "Kocher", email: "kocher@keran.com", is_contact: "true"},
          "1" => {firstname: @responsable.firstname, lastname: @responsable.lastname, email: @responsable.email},
          "2" => {firstname: "Patrick", lastname: "Dubois", email: "patrick@dubois.com"}
        }
      })
      post :create, xhr: true
      expect(assigns(:card).responsables).to include(@responsable, Responsable.find_by_email("patrick@dubois.com"))
    end

    it "should create an owner with an existing user" do
      @user = create(:user)
      request.session[:card_params] = card_params.merge(responsables_attributes = {
        responsables_attributes: {"0" => {firstname: @user.firstname, lastname: @user.lastname, email: @user.email, is_contact: "true"}}
      })
      post :create, xhr: true
      expect(assigns(:card).user).to eq @user
    end

    it "should create an owner and an user" do
      request.session[:card_params] = card_params.merge(responsables_attributes = {
        responsables_attributes: {"0" => {firstname: "John", lastname: "Smith", email: "john@smith.com", is_contact: "true"}}
      })
      post :create, xhr: true
      expect(assigns(:card).user).to eq User.find_by_email("john@smith.com")
    end

    it "should create an user request if an user exists" do
      @user = create(:user)
      request.session[:card_params] = card_params.merge(responsables_attributes = {
        responsables_attributes: {
          "0" => {firstname: "Keran", lastname: "Kocher", email: "kocher@keran.com", is_contact: "true"},
          "1" => {firstname: @user.firstname, lastname: @user.lastname, email: @user.email}
        }
      })
      post :create, xhr: true
      expect(@user.unconfirmed_cards).to include(assigns(:card))
    end

  end

end
