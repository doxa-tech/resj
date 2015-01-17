module CardValidation
	extend ActiveSupport::Concern

	included do
    with_options if: Proc.new { |c| c.current_step?("general")} do |card|
	    card.validates :name, presence: true, length: { maximum: 30 }, uniqueness: true
	    card.validates :description, presence: true, length: { maximum: 800 }
	    card.validates :card_type_id, presence: true
	  end
	  with_options if: Proc.new { |c| c.current_step?("location")} do |card|
	    card.validates :street, presence: true
	    card.validates :location_id, presence: true
	    card.validates :place, length: { maximum: 60 }
	  end
	  with_options if: Proc.new { |c| c.current_step?("team")} do |card|
	    card.validate :responsables?, on: :create
	    card.validate :contact?, on: :create
	    card.validates :email, :format => { :with => /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/ }, :allow_blank => true
	  end

	  before_save :format_url
	end

	private

	def contact?
    if responsables.any? && !responsables.select{ |r| r.is_contact == "true" }.any? && user.nil?
      errors.add(:responsables, "n'a pas de propriétaire (Marquer comme propriétaire)" )
    end
  end

  def responsables?
    if !responsables.any? && user.nil?
      errors.add(:responsables, "ne contient aucun responsable (min. 1)")
    end
  end

	def format_url
    if(!self.website.blank?)
      self.website = "http://#{self.website}" unless self.website[/^https?/]    
    end
  end

end