require 'rails_helper'

RSpec.describe NewsletterMailer do

  before(:each) do
    @emails = [create(:user).email, create(:user, email: "invalid@user.com").email]
    @email = NewsletterMailer.news("Nouvelles fonctionalitées", @emails)
  end

  it "should be delivered to the emails" do
    expect(@email).to be_delivered_to(@emails)
  end

  it "should send the emails" do
    expect { @email.deliver_now }.to change { ActionMailer::Base.deliveries.count }.by(1)
  end

  # we can't check body text anymore, because we don't specify body anymore
  # it "should contain the mail body" do
  #   expect(@email).to have_body_text(/*Cet email vous a été envoyé car vous (ou par l'intermédiaire d'un amis) vous êtes inscrit au site*/)
  # end

  it "should have the correct subject" do
    expect(@email).to have_subject(/Nouvelles fonctionalitées/)
  end

end
