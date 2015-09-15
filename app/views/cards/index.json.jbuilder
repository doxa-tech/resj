json.array! @cards do |card|
	json.id card.id
	json.name card.name
	json.description card.description
	json.latitude card.latitude
	json.longitude card.longitude
	json.card_type do
		json.name card.card_type.name
	end
	json.is_network card.network?
	json.map_point_icon asset_path("map/images/marker-icon-#{type_color(card.card_type.name)}.png")
	json.network_members_coords card.network_members_coords
	json.map_marker_color type_color(card.card_type.name)
end