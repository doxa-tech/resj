module HeaderHelper

	def active_links
		@active_links ||= grouped_links.flatten + ungrouped_links
	end

	def allowed_links
    @admin_links ||= Element.joins(:ownerships).where(ownerships: {user_id: current_user.parents.pluck(:parent_id) << current_user.id }, name: active_links ).pluck(:name).distinct
  end

	def grouped_links
		@grouped_links ||= [
			["Groupes", %w"
				admin/cards
				admin/card_types
				admin/tags
				admin/card_statuses
			"],
			["Securité", %w"
				admin/ownerships
				admin/access_tokens
				admin/parents
				admin/actions
			"],
			["Resources", %w"
				admin/subjects
				admin/articles
				admin/themes
			"],
			["Utilisateurs", %w"
				admin/users
				admin/responsables
			"]
		]
	end

	def ungrouped_links
		@ungrouped_links ||= %w"
			 admin/pages
			 admin/affiliations
			 admin/statuses
			 admin/help_pages
		"
	end

end
