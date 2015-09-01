class CardPermission
  include ActiveModel::Model

  attr_accessor :card

  def assign_attributes(params={})
    params.each do |attr, value|
      self.public_send("#{attr}=", value)
    end if params
  end

  def members
    @member ||= card.confirmed_users.each { |u| u.card = card }
  end

  def members_attributes=(attributes)
    attributes.values.each do |attribute|
      user = User.find_by_id(attribute[:id])
      if user && user.id != card.user_id
        user.card = self.card
        user.card_edit = attribute[:card_edit].to_bool
        user.team_edit = attribute[:team_edit].to_bool
      end
    end
  end
end