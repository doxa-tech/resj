require 'rails_helper'

RSpec.describe CardPermission, :type => :model do

  let!(:card) { create(:card) }
  let(:card_permission) { CardPermission.new(card: card) }

  describe "#new" do

    it "should accept a card attribute" do
      expect(card_permission.card).to eq card
    end

  end

  describe "#assign_attributes" do

    it "should assign a card attribute" do
      card_permission.assign_attributes(card: card)
      expect(card_permission.card).to eq card
    end

  end

  describe "#members" do

    let!(:affiliation) { create(:affiliation) }

    it "should return users of the card" do
      expect(card_permission.members.first).to be_an_instance_of User
    end

    it "should set the card attribute" do
      expect(card_permission.members.first).to respond_to("card")
    end

  end

  describe "#members_attributes" do

    let!(:affiliation) { create(:affiliation) }

    it "should update the users" do
      expect(User).to receive(:find_by_id).with(affiliation.user_id)
      card_permission.members_attributes = {"0" => {card_edit: "1", team_edit: "0", id: affiliation.user_id }}
    end

  end

end
