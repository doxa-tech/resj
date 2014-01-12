namespace :db do 
	desc "Create the pages"
	task pages: :environment do
		Page.destroy_all
		
		Page.create(name: 'home', content: 'content')
	end

	desc "Create the user's types"
	task usertypes: :environment do
		UserType.destroy_all

		UserType.create(name: 'user')
		UserType.create(name: 'group')
	end

	desc "Add the admin user and ownerships"
	task admin: :environment do
		# Reset DB
		User.destroy_all
		Parent.destroy_all
		OwnershipType.destroy_all
		Ownership.destroy_all
		Element.destroy_all


		# Create groups
		user_type_group = UserType.find_by_name('group')
		g_admin = user_type_group.users.create(name: 'g_admin')
		g_user = user_type_group.users.create(name: 'g_user')
		g_base = user_type_group.users.create(name: 'g_base')
		g_ext = user_type_group.users.create(name: 'g_ext')

		# Create admin
		user_type_user = UserType.find_by_name('user')
		admin = user_type_user.users.create(email: 'kocher.ke@gmail.com', name: 'Admin', password: '12341', password_confirmation: '12341')
		
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

		# ownerships for admin group :
		Ownership.create(element_id: admin_pages.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_users.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_ownerships.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
		Ownership.create(element_id: admin_cards.id, user_id: g_admin.id, ownership_type_id: type2.id, right_read: true, right_create: true, right_update: true, right_delete: true)
	end
end