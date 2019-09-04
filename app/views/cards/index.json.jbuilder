json.array! @cards do |card|
	json.id card.id
	json.name card.name
	json.type t("card.card_types.#{card.card_type}")
	json.description card.description
	json.latitude card.latitude
	json.longitude card.longitude
end