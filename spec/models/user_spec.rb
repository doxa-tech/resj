require 'rails_helper'

RSpec.describe User, :type => :model do

	context "validation" do

		it "should format the firstname, the lastname and the email" do
			user = create(:user, firstname: ' jean-michel ', lastname: ' de la fontaine ', email: 'Foo@bar.com')
			expect(user.firstname).to eq "Jean-Michel"
			expect(user.lastname).to eq "De la fontaine"
			expect(user.email).to eq "foo@bar.com"
		end

	end

end
