class CardUser < ActiveRecord::Base
  belongs_to :card
  belongs_to :user

  validate :owner?

  private

  def owner?
    if card.user == user
      errors.add(:card_user, "tente d'affilier un groupe à son priopriétaire.")
    end
  end

end