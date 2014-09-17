namespace :db do 
	desc "Create the pages"
	task pages: :environment do
		Page.destroy_all
		
		Page.create(name: 'home', content: 'content')
		Page.create(name: 'resj', content: 'content')
		Page.create(name: 'resources', content: 'content')
		Page.create(name: 'privacy', content: 'content')
		Page.create(name: 'help', content: 'content')
		Page.create(name: 'contact', content: 'content')
		Page.create(name: 'developer', content: 'content')
	end

	desc "Create the card's types"
	task card_types: :environment do
		CardType.destroy_all

		CardType.create(name: "Groupe de jeunes")
		CardType.create(name: "Groupe de jeunes adultes")
		CardType.create(name: "Groupe d'action")
		CardType.create(name: "Oeuvre jeunesse")
		CardType.create(name: "Réseau régional")
	end
	
	desc "Add the admin user and ownerships"
	task admin: :environment do
		# Reset DB
		User.destroy_all
		Parent.destroy_all
		OwnershipType.destroy_all
		Ownership.destroy_all
		Element.destroy_all
		Action.destroy_all
		UserType.destroy_all

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

		validated = Action.create(name: "validated")
		verificate = Action.create(name: "verificate")
		user_request = Action.create(name: "user_request")
		user_confirmation = Action.create(name: "user_confirmation")

		# ownerships for admin group :
		Ownership.create(element_id: admin_pages.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_users.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_ownerships.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_cards.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true, actions: [verificate])
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
		Ownership.create(element_id: cards.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true, actions: [user_request, user_confirmation])
		Ownership.create(element_id: admin_articles.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)

		# ownership for the admin user
		Ownership.create(element_id: admin_cards.id, user_id: admin.id, ownership_type_id: type2.id, actions: [validated])

		# ownership for the tokens
		Ownership.create(element_id: orators.id, user_id: g_token.id, right_create: true)
	end

	desc "Newsletter rights"
	task newsletter: :environment do
		element = Element.create(name: 'admin/newsletters')
		g_admin = User.find_by_firstname('g_admin')
		type2 = OwnershipType.find_by_name('all_entries')
		Ownership.create(element_id: element.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
	end

	desc "Status rights"
	task status: :environment do
		element = Element.create(name: 'admin/statuses')
		element2 = Element.create(name: 'admin/card_statuses')
		g_admin = User.find_by_firstname('g_admin')
		type2 = OwnershipType.find_by_name('all_entries')
		Ownership.create(element_id: element.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: element2.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
	end

end