require 'rails_helper'

module Cards

  RSpec.describe WizardsController, type: :controller do

    describe "#confirm" do

      it "updates the card status to pending" do
        @card = create(:card, status: nil)
        patch :confirm, params: { id: @card.id }
        @card.reload
        expect(@card.status).to eq "pending"
      end

    end

  end

end