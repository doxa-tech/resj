module MapsHelper

	def map_point_title(card)
		"#{content_tag :p, card.card_type.name, class:'type'} #{card.name} #{link_to 'voir fiche', card_path(card)}"
	end

	def map_point_icon(card)
		asset_path("map/images/marker-icon-#{map_marker_color(card)}.png")
	end

	def map_marker_color(card)
		case card.card_type.name
		when "Groupe de jeunes"
			color = "red"
		when "Groupe de jeunes adultes"
			color = "green"
		when "Groupe d'action"
			color = "orange"
		when "Oeuvre jeunesse"
			color = "blue"
		when "Réseau régional"
			color = "violet"
		end
		return color
	end

	def color_color_type(type)
		case type.name
		when "Groupe de jeunes"
			color = "red"
		when "Groupe de jeunes adultes"
			color = "green"
		when "Groupe d'action"
			color = "orange"
		when "Oeuvre jeunesse"
			color = "blue"
		when "Réseau régional"
			color = "violet"
		end
		return color
	end

end
