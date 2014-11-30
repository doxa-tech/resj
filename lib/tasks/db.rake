namespace :db do 

	desc "Ownership to receive the notification email when a card is created"
	task notification_ownership: :environment do
		Ownership.create(element: Element.find_by_name('admin/card_statuses'), user: User.find_by_email('nkcr.je@gmail.com'), ownership_type: OwnershipType.find_by_name('all_entries'), right_update: true)
	end

	desc "Update element name for card affiliations"
	task affiliation_element: :environment do
		Element.find_by_name('card_affiliations').update_attribute(:name, 'cards/affiliations')
	end

  desc "Assign default newsletters"
  task assign_newsletters: :environment do
    User.users.each do |user|
      user.newsletters = Newsletter.all
    end
  end

end