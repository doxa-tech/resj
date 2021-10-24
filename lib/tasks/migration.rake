namespace :migration do

	desc "Update users"
	task users: :environment do
    print "Remove user as group\n"
    User.where(remember_token: nil).destroy_all
    print "Done !\n"

    print "Removing unconfirmed account\n"
    User.where(confirmed: false).destroy_all
    print "Done !\n"

    print "Resetting remember token...\n"
    User.all.each do |u|
      u.save!
    end
    print "Done !\n"
	end

  desc "Make orators invisible"
  task orators: :environment do
    print "Making orators invisible...\n"
    Orator.all.each do |u|
      u.update_attribute(:disabled, true)
    end
    print "Done !\n"
  end

  desc "Update cards"
  task cards: :environment do
    print "Update card type and status...\n"
    Card.all.each do |card|
      card.update_attribute(:status, card.status - 5)
      card.update_attribute(:card_type, card.card_type - 1)
    end
    print "Done !\n"

    print "Remove cards...\n"
    Card.where.not(status: :online).destroy_all
    print "Done !\n"
  end

end