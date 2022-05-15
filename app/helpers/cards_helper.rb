module CardsHelper
  # used in cards#show to display the card on map
  def to_map_feature(card)
    return {
      type: "feature",
      geometry: {
        type: "point",
        coordinates: [card.longitude, card.latitude]
      },
      properties: {
        id: card.id,
        name: card.name,
        type: I18n.t("card.card_types.#{card.card_type}"),
        description: card.description.truncate(180),
        href: Rails.application.routes.url_helpers.card_path(self)
      }
    }.to_json
  end

  # returns the color associated to a card
  def card_color(card)
    color = case card.card_type
    when "youth" 
      "255,0,0"
    when "adult"
      "0,255,0"
    else 
      "128,128,128"
    end

    if card.validity == "disabled"
      color = "200,200,200"
    end

    color
  end
end