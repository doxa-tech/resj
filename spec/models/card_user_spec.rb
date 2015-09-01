require 'rails_helper'

RSpec.describe CardUser, :type => :model do

  let(:card) { create(:card) }

  it "should not allow the owner to be affiliated to the card" do
    affiliation = build(:affiliation, user: card.user, card: card)
    expect(affiliation).to be_invalid
  end

end