require 'rails_helper'

RSpec.describe NewsletterMailer do

  before(:all) do
    @valid_user = create(:user)
    @invalid_user = create(:user, email: "invalid@user.com", newsletters: Newsletter.none)
    @email = NewsletterMailer.news("lorem ipsum", "Nouvelles fonctionalitées", [@invalid_user.email, @valid_user.email], false, Newsletter.all)
  end

  it "should be delivered to the emails passed in with the correct newsletter's options" do
    expect(@email).to be_delivered_to(@valid_user.email)
  end

  it "should contain the mail body" do
    expect(@email).to have_body_text(/lorem ipsum/)
  end

  it "should have the correct subject" do
    expect(@email).to have_subject(/Nouvelles fonctionalitées/)
  end

end