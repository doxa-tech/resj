namespace :cards_update do

	desc "Check if a card must be checked by its owner"
	task check: :environment do
    Card.all.each do |card|
      # Here is the schedule reminder:
      #
      # | Step | Days |
      # | ---- | ---- |
      # | 0    | 180  |
      # | 1    | 180 + 14 |
      # | 2    | 180 + 14*2 |
      # | 3    | 180 + 14*3 |
      # | 4    | 180 + 14*4 |              // deactivate the card
      # | 5    | 180 + 14*4 + 60 |
      # | 5 +i | 180 + 14*4 + 60 * (i+1) | // send every two months

      # to be fair we cap the last_updated to the release of V2 - 6 months
      # to be adjusted so that when we release the task we quickly get 180 days
      release = Date.strptime("1/6/2021", "%d/%m/%Y")
      base = [release, card.last_updated.to_date].max

      days_from_update = (Time.now.to_date - base).to_i

      days2step = {180 => 0, 180+14 => 1, 180+14*2 => 2, 180+14*3 => 3, 180+14*4 => 4}

      step = days2step[days_from_update] || -1

      if step == -1 && days_from_update > 180 + 14*4 && (days_from_update - (180 + 14*4)) % 60 == 0
        step = (days_from_update - (180 + 14*4)) / 60
      end

      if step == 4
        # => To be implemented in model
        #card.deactivated = true
        #card.save

        Admin::CardMailer.deactivated(card).deliver_now
      end

      if step != -1
        CardMailer.update_check(card, step).deliver_now
      end
    end
  end

end