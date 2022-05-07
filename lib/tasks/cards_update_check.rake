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

      days_from_update = (Time.current.to_date - card.last_updated.to_date).to_i

      days2step = {180 => 0, 180+14 => 1, 180+14*2 => 2, 180+14*3 => 3, 180+14*4 => 4}

      step = days2step[days_from_update] || -1

      if step == -1 && days_from_update > 180 + 14*4 && (days_from_update - (180 + 14*4)) % 60 == 0
        step = 4 + (days_from_update - (180 + 14*4)) / 60
      end

      # p "step: #{step}, days_from_update: #{days_from_update}"

      # flag the card and notify the admin if not already done
      if step >= 4 && !card.disabled?
        card.update_attribute(:validity, :disabled)
        Admin::CardMailer.deactivated(card).deliver_now
      end

      # flag the card if not already done
      if step >= 0 && step <= 3 && !card.solicited?
        card.update_attribute(:validity, :solicited)
      end
      
      # notify the card owner
      if step >= 0
        CardMailer.update_check(card, step).deliver_now
      end
    end
  end

end