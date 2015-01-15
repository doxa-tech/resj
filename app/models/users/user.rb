class User < ActiveRecord::Base
  include UserValidation
	attr_accessor :current_password, :card

	has_secure_password({ validations: false })

  scope :users, -> { joins(:user_type).where(user_types: {name: "user"}).readonly(false) }

  belongs_to :user_type
  
  # User belongs to other users -> .users
  # User has many users -> .inverse_users
  has_many :parents, dependent: :destroy
  has_many :users, through: :parents
  has_many :inverse_parents, :class_name => "Parent", :foreign_key => "parent_id", dependent: :destroy
  has_many :inverse_users, :through => :inverse_parents, :source => :user

  has_many :ownerships, dependent: :destroy
  has_many :verificator_comments
  has_many :activities
  has_many :articles
  has_many :connections
  has_many :subjects

  # User belongs to cards as responsables
  has_many :card_users, dependent: :destroy
  has_many :cards, through: :card_users
  has_one :orator, dependent: :destroy

  # User owned a card
  has_many :cards

  # Newsletter
  has_many :user_newsletters
  has_many :newsletters, through: :user_newsletters

  mount_uploader :avatar, AvatarUploader

  accepts_nested_attributes_for :orator

  def send_password_reset
    self.reset_token =  SecureRandom.urlsafe_base64
    self.reset_sent_at = Time.zone.now
    save!
    # sends reset link
    UserMailer.password_reset(self).deliver
  end

  def full_name
    "#{firstname} #{lastname}"
  end

  def gravatar_url(size = 100)
    default_url = URI.escape "identicon"
    if self.gravatar_email
      "http://gravatar.com/avatar/#{Digest::MD5.hexdigest(self.gravatar_email.downcase)}.png?d=#{default_url}&s=#{size}"
    else
      "http://gravatar.com/avatar/#{Digest::MD5.hexdigest('no')}.png?d=#{default_url}&s=#{size}"
    end
  end

  def image
    if gravatar || avatar_url.nil?
      gravatar_url
    else
      avatar.thumb.url
    end
  end

  # Cards requests to an user
  def unconfirmed_cards
    Card.joins(:card_users).where(:card_users => {user_id: id, user_validated: nil, card_validated: true})
  end

  # Cards affiliations
  def confirmed_cards
    Card.joins(:card_users).where(:card_users => {user_id: id, user_validated: true, card_validated: true}) + Card.where(user_id: id)
  end

  # Cards request from an user and not answered
  def pending_cards
    Card.joins(:card_users).where(:card_users => {user_id: id, user_validated: true, card_validated: nil})
  end

  def update_with_password(params)
    authenticated = authenticate(params[:current_password])
    assign_attributes(params)
    if valid? && authenticated
      save
      true
    else
      errors.add(:current_password, "ne correspond pas") unless authenticated
      false
    end
  end

  def send_request(card)
    card_user = CardUser.where(user_id: self.id, card_id: card.id).first
    if card_user
      if card_user.card_validated == false && card_user.updated_at < 1.weeks.ago
        card_user.update_attribute(:card_validated, nil)
      elsif card_user.user_validated == false
        card_user.update_attribute(:user_validated, true)
      end
    elsif !self.in?(card.confirmed_users)
      @new_card_user = CardUser.create(user_id: self.id, card_id: card.id, user_validated: true)
    end
  end

  def answer_request(card, answer)
    @card_user = CardUser.where(user_id: self.id, card_id: card.id).first
    if @card_user && answer.in?(["false", "true"])
      card.replace_responsable(self)
      @card_user.update_attribute(:user_validated, answer)
    end
  end

  def team_edit
    permission = Permission.new(self)
    @team_edit = permission.allow_modify?('cards/affiliations', 'edit', card)
  end

  def card_edit
    permission = Permission.new(self)
    @card_edit = permission.allow_modify?('cards', 'edit', card)
  end

  def team_edit=(bool)
    Ownership.create_or_destroy_by(bool, right_read: true, right_create: true, right_update: true, right_delete: true, 
      element: "cards/affiliations", type: "on_entry", id_element: card.id, user: self)
  end

  def card_edit=(bool)
    Ownership.create_or_destroy_by(bool, right_read: true, right_create: true, right_update: true, 
      element: "cards", type: "on_entry", id_element: card.id, user: self)
  end

  
end
