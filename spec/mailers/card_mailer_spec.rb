require 'rails_helper'

RSpec.describe CardMailer do

  let(:card) { create(:card) }
  let(:email) { CardMailer.owner_created(card, true, "12341") }

  it "should be delivered to card's owner email" do
    expect(email).to be_delivered_to(card.user.email)
  end

  it "should contain the passord" do
    expect(email).to have_body_text("12341")
  end

end