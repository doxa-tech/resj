module MapsHelper

	def type_color(name)
		case name
		when "Groupe de jeunes"
			"red"
		when "Groupe de jeunes adultes"
			"green"
		when "Groupe d'action"
			"orange"
		when "Oeuvre jeunesse"
			"blue"
		when "Réseau régional"
			"violet"
		when "Formation"
			"cyan"
		end
	end

end
