namespace :test do 

	desc "Init a environment for testing"
	task init: :environment do
		Page.create(name: 'home', content: 'content')
		Page.create(name: 'resj', content: 'content')
		Page.create(name: 'resources', content: 'content')
		Page.create(name: 'privacy', content: 'content')
		Page.create(name: 'help', content: 'content')
		Page.create(name: 'contact', content: 'content')
		Page.create(name: 'developer', content: 'content')

		UserType.create(name: 'user')
		UserType.create(name: 'group')

		# Create groups
		user_type_group = UserType.find_by_name('group')
		g_admin = user_type_group.users.create(firstname: 'g_admin')
		g_user = user_type_group.users.create(firstname: 'g_user')
		g_base = user_type_group.users.create(firstname: 'g_base')
		g_token = user_type_group.users.create(firstname: 'g_token')

		# Create admin
		user_type_user = UserType.find_by_name('user')
		admin = user_type_user.users.create(email: 'kocher.ke@gmail.com', firstname: 'Keran', lastname: "Kocher", password: '12341', password_confirmation: '12341', confirmed: true)
		
		# Add admin to groups
		Parent.create(user_id: admin.id, parent_id: g_admin.id)
		Parent.create(user_id: admin.id, parent_id: g_user.id)
		Parent.create(user_id: admin.id, parent_id: g_base.id)

		type1 = OwnershipType.create(name: 'on_entry')
		type2 = OwnershipType.create(name: 'all_entries')
		type3 = OwnershipType.create(name: 'on_ownership')

		admin_pages = Element.create(name: 'admin/pages')
		admin_users = Element.create(name: 'admin/users')
		admin_cards = Element.create(name: 'admin/cards')
		admin_ownerships = Element.create(name: 'admin/ownerships')
		admin_actions = Element.create(name: 'admin/actions')
		admin_affiliations = Element.create(name: 'admin/affiliations')
		admin_tags = Element.create(name: 'admin/tags')
		admin_responsables = Element.create(name: 'admin/responsables')
		admin_card_types = Element.create(name: 'admin/card_types')
		admin_verificator_comments = Element.create(name: 'admin/verificator_comments')
		admin_parents = Element.create(name: 'admin/parents')
		admin_access_tokens = Element.create(name: 'admin/access_tokens')
		orators = Element.create(name: 'orators')
		admin_subjects = Element.create(name: 'admin/subjects')
		admin_themes = Element.create(name: 'admin/themes')
		cards = Element.create(name: 'cards')
		admin_articles = Element.create(name: 'admin/articles')
		admin_newsletter = Element.create(name: 'admin/newsletters')
		admin_statuses = Element.create(name: 'admin/statuses')
		admin_card_statuses = Element.create(name: 'admin/card_statuses')
		card_affiliations = Element.create(name: 'card_affiliations')

		# ownerships for admin group :
		Ownership.create(element_id: admin_pages.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_users.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_ownerships.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_cards.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_actions.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_affiliations.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_tags.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_responsables.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_card_types.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_verificator_comments.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_parents.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_access_tokens.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_subjects.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_themes.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: cards.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_articles.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_newsletter.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_statuses.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_card_statuses.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)

		# ownership for the admin user
		Ownership.create(element_id: admin_card_statuses.id, user_id: admin.id, ownership_type_id: type2.id, right_update: true)

		# ownership for the tokens
		Ownership.create(element_id: orators.id, user_id: g_token.id, right_create: true)

		CardType.create(name: "Groupe de jeunes")
		CardType.create(name: "Groupe de jeunes adultes")
		CardType.create(name: "Groupe d'action")
		CardType.create(name: "Oeuvre jeunesse")
		CardType.create(name: "Réseau régional")
		
		canton = Canton.create(name: "Fribourg", abbreviation: "FR")
		Location.create(npa: 1630, post_name: "Bulle", official_name: "Bulle", latitude: 46, longitude: 7, canton: canton)

		Status.create(name: "En cours de validation")
		Status.create(name: "En ligne")
		Status.create(name: "Incomplet")
		Status.create(name: "Action requise")
	end

end