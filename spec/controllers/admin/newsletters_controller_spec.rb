require 'rails_helper'

RSpec.describe Admin::NewslettersController, :type => :controller do

	describe "POST #create" do

		before(:each) do
			sign_in User.find_by_email('kocher.ke@gmail.com')
		end

		it "should sent an email with the right params" do
			params = {
				options:  Newsletter.all.map{|n| n.id.to_s},
				subject: "Nouvelles fonctionalitées",
				emails:  create_list(:user_list, 5).map(&:email),
				content: "Lorem ipsum",
				mandrill: false
			}
			expect(NewsletterMailer).to receive(:news).with(params[:content], params[:subject], params[:emails], params[:mandrill], params[:options])
			post :create, params
		end

	end

end
