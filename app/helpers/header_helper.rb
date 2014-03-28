module HeaderHelper

	def card_group
		[
			["Groupes",%w"
				admin/cards
				admin/card_types
				admin/tags
			"],
			["Securité",%w"
				admin/ownerships
				admin/access_tokens
				admin/parents
				admin/actions
			"],
			["Resources",%w"
				admin/subjects
				admin/articles
				admin/themes
			"],
			["Utilisateurs",%w"
				admin/users
				admin/responsables
			"],
		]
	end

	def card_group_flattened
		card_group.flatten
	end

end