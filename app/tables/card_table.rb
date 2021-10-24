class CardTable < BaseTable

  def attributes
    [:id, :name, :description, :card_type, :street, { location: :official_name }, :place, :email, :website, :affiliation, :created_at, :updated_at]
  end

  def model
    Card
  end

  module Search

    def self.associations
      [:user]
    end

    def self.fields
      { cards: [:name], users: [:firstname, :lastname, :email] }
    end

  end

end
