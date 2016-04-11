require 'rails_helper'

RSpec.describe Admin::NewslettersController, :type => :controller do

	describe "POST #create" do

		before(:each) do
			sign_in User.find_by_email('kocher.ke@gmail.com')
			@params = {
				options:  Newsletter.all.map{|n| n.id.to_s},
				subject: "Nouvelles fonctionalitées"
			}
		end

		it "should send an email with the right params" do
			@params[:emails] =  create_list(:user_list, 5).map(&:email)
			expect(NewsletterMailer).to receive(:news).with(@params[:subject], array_including(@params[:emails])).and_call_original
			post :create, **@params
		end

		it "should not send an email to an user who does not want" do
			valid_user = create(:user); invalid_user = create(:user, email: "invalid@user.com")
			invalid_user.newsletters = Newsletter.none
			@params[:emails] = [valid_user.email, invalid_user.email]
			expect(NewsletterMailer).to receive(:news).with(@params[:subject], [valid_user.email]).and_call_original
			post :create, **@params
		end

	end

end
