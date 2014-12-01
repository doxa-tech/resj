namespace :seed do 

	desc "Setup the environment"
  task :all => [:pages, :card_types, :statuses, :ownerships, :superuser, :help_categories, :notifications]

	desc "Create the pages"
	task pages: :environment do
		Page.find_or_create_by(name: 'home')
		Page.find_or_create_by(name: 'resj')
		Page.find_or_create_by(name: 'resources')
		Page.find_or_create_by(name: 'privacy')
		Page.find_or_create_by(name: 'help')
		Page.find_or_create_by(name: 'contact')
		Page.find_or_create_by(name: 'developer')
	end

	desc "Create the card's types"
	task card_types: :environment do
		CardType.find_or_create_by(name: "Groupe de jeunes")
		CardType.find_or_create_by(name: "Groupe de jeunes adultes")
		CardType.find_or_create_by(name: "Groupe d'action")
		CardType.find_or_create_by(name: "Oeuvre jeunesse")
		CardType.find_or_create_by(name: "Réseau régional")
	end

	desc "Create the statuses"
	task statuses: :environment do
		Status.find_or_create_by(name: "En cours de validation")
		Status.find_or_create_by(name: "En ligne")
		Status.find_or_create_by(name: "Incomplet")
		Status.find_or_create_by(name: "Action requise")
	end
	
	desc "Create the ownerships basics"
	task ownerships: :environment do

		all_entries = OwnershipType.find_or_create_by(name: 'all_entries')
		OwnershipType.find_or_create_by(name: 'on_entry')
		OwnershipType.find_or_create_by(name: 'on_ownership')

		group = UserType.find_or_create_by(name: 'group')
		UserType.find_or_create_by(name: 'user')

		g_admin = User.find_or_create_by(firstname: 'g_admin', user_type: group)
		User.find_or_create_by(firstname: 'g_user', user_type: group)
		User.find_or_create_by(firstname: 'g_base', user_type: group)
		User.find_or_create_by(firstname: 'g_token', user_type: group)

		%w[admin/pages 
			admin/users 
			admin/cards 
			admin/ownerships 
			admin/actions 
			admin/affiliations 
			admin/tags 
			admin/newsletters
			admin/responsables 
			admin/card_types 
			admin/verificator_comments 
			admin/parents 
			admin/access_tokens
			orators 
			admin/subjects 
			admin/themes 
			cards 
			admin/articles 
			cards/affiliations 
			admin/statuses 
			admin/card_statuses
			].each do |name|
			Element.find_or_create_by(name: name)
		end

		Element.all.each do |element| 
			Ownership.find_or_create_by(element: element, user: g_admin, ownership_type: all_entries, right_read: true, right_create: true, right_update: true, right_delete: true)
		end
	end

	desc "Create a superuser"
	task superuser: :environment do
		# Create admin
		user = UserType.find_by_name('user')
		if (superuser = User.find_by_email('kocher.ke@gmail.com')).nil?
			superuser = User.create(email: 'kocher.ke@gmail.com', firstname: 'Keran', lastname: "Kocher", password: '12341', password_confirmation: '12341', confirmed: true, user_type: user)
		end

		# Add admin to groups
		Parent.find_or_create_by(user: superuser, parent: User.find_by_firstname('g_admin'))
		Parent.find_or_create_by(user: superuser, parent: User.find_by_firstname('g_user'))
		Parent.find_or_create_by(user: superuser, parent: User.find_by_firstname('g_base'))
	end

	desc "Create mail notifications options"
	task notifications: :environment do
		["Événements/agenda pour la jeunesse en suisse romande", "Annonces importantes (quelques une par année)", 
			"Notifications personnelles (demandes d'affiliations, ...)", "Nouveautés et activités sur le site",
			"Réseau régional (notification des réseaux régionnaux que vous avez rejoint"
		].each do |name|
			Newsletter.find_or_create_by(name: name)
		end
	end

	desc "Create help's categories"
	task help_categories: :environment do
		a = HelpCategory.find_or_create_by(name: "Profil / gestion d'une oeuvre", description: "Tout ce qu'il faut savoir pour éditer ses infos...")
		a.pages.create(name: "Le bon format pour ma bannière et mon logo", content: "...")
	end

end