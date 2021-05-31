json.array! @cards do |card|
	json.type "feature"
	json.geometry do
		json.type "point"
		json.coordinates do
			json.array! [card.longitude, card.latitude]
		end
	end
	json.properties do
		json.id card.id
		json.name card.name
		json.type t("card.card_types.#{card.card_type}")
		json.description card.description.truncate(180)
		json.color card.color
		json.href card_path(card)
		json.place card.place
		json.canton card.location.canton.name
		json.user "#{card.user.firstname} #{card.user.lastname}"
		json.email card.user.email
	end
end