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
		json.description "<h4>#{card.name}</h4>
			<p>#{card.description}</p>"
		json.color card.color
		json.href card_path(card)
	end
end