module HeaderHelper

	def admin_links
		active = %w[admin/cards admin/card_types admin/pages admin/users \
			admin/affiliations admin/tags admin/responsables admin/ownerships \
			admin/actions admin/parents admin/access_tokens admin/themes \
			admin/subjects admin/articles admin/statuses admin/card_statuses]
    @admin_links ||= Element.joins(:ownerships).where(ownerships: {user_id: current_user.parents.pluck(:parent_id) << current_user.id }, name: active ).pluck(:name).uniq
  end

	def card_group
		[
			["Groupes",%w"
				admin/cards
				admin/card_types
				admin/tags
				admin/card_statuses
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