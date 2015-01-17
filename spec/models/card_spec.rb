require 'rails_helper'

RSpec.describe Card, :type => :model do

  describe "#owner=" do

  let(:card) { create(:card) }

    it "should create an new user" do
      responsable = build(:responsable)
      card.owner = responsable
      expect(card.user.email).to eq responsable.email
    end

    it "should find an existing user" do
      user = create(:user)
      responsable = build(:responsable)
      card.owner = responsable
      expect(card.user).to eq user
    end

    it "should create the ownerships" do
      responsable = build(:responsable)
      card.owner = responsable
      permission = Permission.new(card.user)
      expect(permission.allow_modify?('cards', 'edit', card))
      expect(permission.allow_modify?('cards/affiliations', 'edit', card))
    end

    it "should send a confirmation email" do
      expect(UserMailer).to receive(:confirmation).with(kind_of(User)).and_call_original
      responsable = build(:responsable)
      card.owner = responsable
    end

    it "should send an email" do
      expect(CardMailer).to receive(:owner_created).with(card, true, kind_of(String)).and_call_original
      responsable = build(:responsable)
      card.owner = responsable
    end

  end

end
