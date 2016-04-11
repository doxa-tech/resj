require 'rails_helper'

RSpec.describe UserMailer do

  let(:card) { create(:card, :with_responsables) }
  let(:user) { create(:user) }

  describe 'for confirmation' do
    let(:email) { UserMailer.confirmation(user) }

    it "should be delivered to card's owner email" do
      expect(email).to be_delivered_to(user.email)
    end

    it "should send the email" do
      expect { email.deliver_now }.to change { ActionMailer::Base.deliveries.count }.by(1)
    end
  end

  describe 'for password_reset' do
    let(:email) { UserMailer.password_reset(user) }

    it "should be delivered to card's owner email" do
      expect(email).to be_delivered_to(user.email)
    end

    it "should send the email" do
      expect { email.deliver_now }.to change { ActionMailer::Base.deliveries.count }.by(1)
    end

    it "should contain the url" do
      expect(email).to have_body_text(edit_password_reset_url(id: user.reset_token))
    end
  end

  describe 'for card_affiliation_request' do
    let(:email) { UserMailer.card_affiliation_request(card, user) }

    it "should be delivered to card's owner email" do
      expect(email).to be_delivered_to(user.email)
    end

    it "should send the email" do
      expect { email.deliver_now }.to change { ActionMailer::Base.deliveries.count }.by(1)
    end
  end

  describe 'for confirmed_card' do
    let(:email) { UserMailer.confirmed_card(card, user) }

    it "should be delivered to card's owner email" do
      expect(email).to be_delivered_to(user.email)
    end

    it "should send the email" do
      expect { email.deliver_now }.to change { ActionMailer::Base.deliveries.count }.by(1)
    end
  end

  describe 'for unconfirmed_card' do
    let(:email) { UserMailer.unconfirmed_card(card, user) }

    it "should be delivered to card's owner email" do
      expect(email).to be_delivered_to(user.email)
    end

    it "should send the email" do
      expect { email.deliver_now }.to change { ActionMailer::Base.deliveries.count }.by(1)
    end
  end

  describe 'for invite' do
    let(:email) { UserMailer.invite("bob@example.com", "bob", "link") }

    it "should be delivered to card's owner email" do
      expect(email).to be_delivered_to("bob@example.com")
    end

    it "should send the email" do
      expect { email.deliver_now }.to change { ActionMailer::Base.deliveries.count }.by(1)
    end

    it "should contain the name" do
      expect(email).to have_body_text("bob")
    end

    it "should contain the url" do
      expect(email).to have_body_text("link")
    end
  end

end
