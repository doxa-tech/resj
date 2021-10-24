namespace :migration do

	desc "Update users"
	task users: :environment do
    print "Remove user as group\n"
    User.where(remember_token: nil).destroy_all
    print "Done !\n"

    print "Removing unconfirmed account that don't have a card\n"
    ActiveRecord::Base.transaction do
      User.all.each do |u|
        if !u.confirmed
          u.destroy! unless u.cards.any?
        end
      end
    end
    print "Done !\n"

    print "Resetting remember token...\n"
    ActiveRecord::Base.transaction do
      User.all.each do |u|
        if !u.save
          print "Destroy invalid user\n"
          u.cards.destroy_all
          u.destroy!
        end
      end
    end
    print "Done !\n"
	end

  desc "Make orators invisible"
  task orators: :environment do
    print "Making orators invisible...\n"
    Orator.update_all(disabled: true)
    print "Done !\n"
  end

  desc "Update cards"
  task cards: :environment do
    print "Update card type and status...\n"
    ActiveRecord::Base.transaction do
      Card.all.each do |card|
        status = card.read_attribute_before_type_cast(:status)
        card_type = card.read_attribute_before_type_cast(:card_type)

        card.update_attribute(:status, status - 5)
        card.update_attribute(:card_type, card_type - 1)
      end
      print "Done !\n"

      print "Remove cards...\n"
      Card.where.not(status: :online).destroy_all
      print "Done !\n"
    end
  end

  desc "Send migration message to orators"
  task orators_email: :environment do
    Orator.all.each do |orator|
      OratorMailer.migration(orator).deliver_now
    end
    # for testing an individual orator:
    # orator = Orator.find(36)
    # mail = OratorMailer.migration(orator)
    # print "mail: #{mail}\n"
    # mail.deliver_now
  end

end