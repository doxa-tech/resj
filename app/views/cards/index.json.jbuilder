json.array! @cards do |card|
	json.id card.id
	json.name card.name
	json.latitude card.latitude
	json.longitude card.longitude
	json.card_type do
		json.name card.card_type.name
	end
	json.is_network card.network?
	json.map_point_icon card.map_point_icon
	json.network_members_coords card.network_members_coords
end