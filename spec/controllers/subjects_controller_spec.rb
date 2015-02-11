require "rails_helper"

RSpec.describe SubjectsController, :type => :controller do

  describe "#GET index" do
    let(:response) { get :index }

    context "as a visitor" do

        it "should not allow" do
          expect(response).to redirect_to connexion_path
        end

    end

    context "as a card affiliated" do
      before(:each) do
        @affiliation = create(:affiliation)
        sign_in @affiliation.user
      end

      it "should allow" do
        expect(response.status).to eq 200
      end

    end

    context "as a card owner" do
      before(:each) do
        @card = create(:active_card)
        sign_in @card.user
      end

      it "should allow" do
        expect(response.status).to eq 200
      end

    end

    context "as an right owner" do
      before(:each) do
        @user = create(:user)
        create(:ownership, user: @user, element_name: "resources", right_read: true)
        sign_in @user
      end

      it "should allow" do
        expect(response.status).to eq 200
      end

    end

  end

end