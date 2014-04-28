require 'spec_helper'

describe CardMailer do
	let(:user) { mock_model User, firstname: 'Noémien', lastname: 'Kocher', email: 'nkcr.je@gmail.com'}
	let(:card) { mock_model Card, user: user, card_type: (mock_model CardType, name: 'a'), name: 'name' }
	
	describe 'owner_created' do
		let(:mail) { CardMailer.owner_created(card, { new_user?: true, password: 'aa' }) }
		it 'Must have correct template' do
			expect(mail.header['X-MC-Template'].value).to eql('card-created-owner-new')
		end
		it 'Must have correct password' do
			a = ActiveSupport::JSON.decode(mail.header['X-MC-MergeVars'].value)
			expect(a["PASSWD"]).to eql('aa')
		end
		it 'Must have correct card type' do
			a = ActiveSupport::JSON.decode(mail.header['X-MC-MergeVars'].value)
			expect(a["TYPE"]).to eql('a')
		end
		it 'Must send to correct user' do
			expect(mail.to).to eql([user.email])
		end
	end

	describe 'admin_created' do
		let(:mail) { CardMailer.admin_created(user, card) }
		it 'Must have correct template' do
			expect(mail.header['X-MC-Template'].value).to eql('card-created-admin')
		end
		it 'Must have correct card name' do
			a = ActiveSupport::JSON.decode(mail.header['X-MC-MergeVars'].value)
			expect(a["GNAME"]).to eql('name')
		end
		it 'Must have correct card type' do
			a = ActiveSupport::JSON.decode(mail.header['X-MC-MergeVars'].value)
			expect(a["TYPE"]).to eql('a')
		end
		it 'Must send to correct user' do
			expect(mail.to).to eql([user.email])
		end
	end

	describe 'admin_validated' do
	  let(:mail) { CardMailer.admin_validated(User.all, card) }
		it 'Must have correct template' do
			expect(mail.header['X-MC-Template'].value).to eql('card-validated-admin')
		end
		it 'Must have correct card name' do
			a = ActiveSupport::JSON.decode(mail.header['X-MC-MergeVars'].value)
			expect(a["GNAME"]).to eql('name')
		end
		it 'Must have correct card type' do
			a = ActiveSupport::JSON.decode(mail.header['X-MC-MergeVars'].value)
			expect(a["TYPE"]).to eql('a')
		end
		# it 'Must send to correct user' do
		# 	expect(mail.to).to eql([user.email])
		# end
	end

	describe 'admin_verified' do
	  let(:mail) { CardMailer.admin_verified(User.all, card) }
		it 'Must have correct template' do
			expect(mail.header['X-MC-Template'].value).to eql('card-verified-admin')
		end
		it 'Must have correct card name' do
			a = ActiveSupport::JSON.decode(mail.header['X-MC-MergeVars'].value)
			expect(a["GNAME"]).to eql('name')
		end
		it 'Must have correct card type' do
			a = ActiveSupport::JSON.decode(mail.header['X-MC-MergeVars'].value)
			expect(a["TYPE"]).to eql('a')
		end
		# it 'Must send to correct user' do
		# 	expect(mail.to).to eql([user.email])
		# end
	end


end