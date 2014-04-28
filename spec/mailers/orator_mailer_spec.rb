require 'spec_helper'

describe OratorMailer do
	let(:user) { mock_model User, firstname: 'Noémien', lastname: 'Kocher', email: 'nkcr.je@gmail.com'}
	let(:card) { mock_model Card, user: user, card_type: (mock_model CardType, name: 'a'), name: 'name' }

	describe 'orator_created' do
		let(:mail) { OratorMailer.orator_created(user) }
		it 'Must have correct template' do
			expect(mail.header['X-MC-Template'].value).to eql('orator-created')
		end
		it 'Must have correct orator name' do
			a = ActiveSupport::JSON.decode(mail.header['X-MC-MergeVars'].value)
			expect(a["NAME"]).to eql(user.firstname)
		end
		it 'Must send to correct user' do
			expect(mail.to).to eql([user.email])
		end
	end
end