require 'rails_helper'

RSpec.describe CardMailer do

  let(:card) { create(:card, :with_responsables) }
  let(:user) { create(:user) }

  describe 'for owner_created_new' do
    let(:email) { CardMailer.owner_created(card, true, "12341") }

    it "should be delivered to card's owner email" do
      expect(email).to be_delivered_to(card.user.email)
    end

    it "should send the email" do
      expect { email.deliver_now }.to change { ActionMailer::Base.deliveries.count }.by(1)
    end

    it "should contain the passord" do
      expect(email).to have_body_text("12341")
    end
  end

  describe 'for owner_created_exist' do
    let(:email) { CardMailer.owner_created(card, false, "12341") }

    it "should be delivered to card's owner email" do
      expect(email).to be_delivered_to(card.user.email)
    end

    it "should send the email" do
      expect { email.deliver_now }.to change { ActionMailer::Base.deliveries.count }.by(1)
    end

    it "should not contain the passord" do
      expect(email).not_to have_body_text("12341")
    end
  end

  describe 'for admin_created' do
    let(:email) { CardMailer.admin_created("test@example.com", card) }

    it "should be delivered to the correct email" do
      expect(email).to be_delivered_to("test@example.com")
    end

    it "should send the email" do
      expect { email.deliver_now }.to change { ActionMailer::Base.deliveries.count }.by(1)
    end
  end

  describe 'for team_welcome' do
    let(:email) { CardMailer.team_welcome(card) }

    it "should be delivered to card's owner email" do
      expect(email).to be_delivered_to(card.responsables.pluck(:email))
    end

    it "should send the email" do
      expect { email.deliver_now }.to change { ActionMailer::Base.deliveries.size }.by(1)
    end
  end

  describe 'for card_affiliation_request' do
    let(:email) { CardMailer.card_affiliation_request(user, card) }

    it "should be delivered to card's owner email" do
      expect(email).to be_delivered_to(card.user.email)
    end

    it "should send the email" do
      expect { email.deliver_now }.to change { ActionMailer::Base.deliveries.count }.by(1)
    end
  end

  describe 'for confirmed_user' do
    let(:email) { CardMailer.confirmed_user(user, card) }

    it "should be delivered to card's owner email" do
      expect(email).to be_delivered_to(card.user.email)
    end

    it "should send the email" do
      expect { email.deliver_now }.to change { ActionMailer::Base.deliveries.count }.by(1)
    end
  end

  describe 'for unconfirmed_user' do
    let(:email) { CardMailer.unconfirmed_user(user, card) }

    it "should be delivered to card's owner email" do
      expect(email).to be_delivered_to(card.user.email)
    end

    it "should send the email" do
      expect { email.deliver_now }.to change { ActionMailer::Base.deliveries.count }.by(1)
    end
  end

  describe 'for changed_status' do
    let(:email) { CardMailer.changed_status(card, card.status, card.status, "") }

    it "should be delivered to card's owner email" do
      expect(email).to be_delivered_to(card.user.email)
    end

    it "should send the email" do
      expect { email.deliver_now }.to change { ActionMailer::Base.deliveries.count }.by(1)
    end
  end

end
