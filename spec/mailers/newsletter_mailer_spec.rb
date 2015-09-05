require 'rails_helper'

RSpec.describe NewsletterMailer do

  before(:each) do
    @emails = [create(:user).email, create(:user, email: "invalid@user.com").email]
    @email = NewsletterMailer.news("lorem ipsum", "Nouvelles fonctionalitées", @emails, false)
  end

  it "should be delivered to the emails" do
    expect(@email).to be_delivered_to(@emails)
  end

  it "should contain the mail body" do
    expect(@email).to have_body_text(/lorem ipsum/)
  end

  it "should have the correct subject" do
    expect(@email).to have_subject(/Nouvelles fonctionalitées/)
  end

end