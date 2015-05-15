FactoryGirl.define do

  factory :user do
    firstname "John"
    lastname  "Smith"
    email { "#{firstname.downcase}@#{lastname.downcase}.com" }
    password "12341"
    password_confirmation "12341"
    user_type { UserType.find_or_create_by(name: 'user') }
    confirmed true

    factory :unconfirmed_user do
      confirmed false
    end

    factory :user_list do
      sequence(:firstname) { Faker::Name.first_name }
      sequence(:lastname) { Faker::Name.last_name }
      sequence(:email) { Faker::Internet.email }
    end

    before(:create) do |user|
      UserType.find_or_create_by(name: 'group')
    end
  end

  factory :orator do
    location { Location.find_by_official_name("Bulle") || create(:location) }
    themes { [Theme.find_or_create_by(name: "L'argent")] }
    user
  end

  factory :card do
    name "Waykup"
    description "Un super groupe de jeunes"
    street "Route du verdel 8"
    latitude 46
    longitude 7
    website "waykup.ch"
    user { User.find_by_email("bill@gates.com") || create(:user, firstname: "Bill", lastname: "Gates") }
    location { Location.find_by_official_name("Bulle") || create(:location) }
    status { Status.find_or_create_by(name: "En cours de validation") }
    card_type { CardType.find_or_create_by(name: "Groupe de jeunes") }

    after(:create) do |card|
      card.user.ownerships.create(element_id: Element.find_or_create_by(name: 'cards').id, ownership_type_id: OwnershipType.find_or_create_by(name: 'on_entry').id, id_element: card.id, right_read: true, right_update: true, right_create: true)
      card.user.ownerships.create(element_id: Element.find_or_create_by(name: 'cards/affiliations').id, ownership_type_id: OwnershipType.find_or_create_by(name: 'on_entry').id, id_element: card.id, right_create: true, right_delete: true, right_update: true, right_read: true)
    end

    factory :active_card do
      status { Status.find_or_create_by(name: "En ligne") }
    end
  end

  factory :access_token do
    is_valid true
    exp_at { 1.month.from_now }
  end

  factory :ownership do
    transient do
      element_name 'admin/articles'
      user_name 'John Smith'
      group_name nil
      type_name 'all_entries'
      action 'share'
    end
    element { Element.find_or_create_by(name: element_name) }
    user { if group_name.nil? then User.find_by_firstname_and_lastname(*user_name.split()) else User.find_by_firstname(group_name) end }
    
    ownership_type { OwnershipType.find_or_create_by(name: type_name) }

    id_element nil
    right_read false
    right_create false
    right_update false
    right_delete false
    actions { [Action.find_or_create_by(name: action)] }
  end

  factory :affiliation, class: CardUser do
    user { User.find_by_email("john@smith.com") || create(:user) }
    card { Card.find_by_name("Waykup") || create(:active_card) }
    card_validated true
    user_validated true

    factory :recent_affiliation do
      updated_at { 1.day.ago }
    end
  end

  factory :article do
    sequence(:title) { |n| "#{n} ours meurt chaque année"}
    content "Chaque année, plus de 1000 ourse blancs meurt"
    user { User.find_by_email('patrick@dujardin.com') || create(:user, firstname: 'Patrick', lastname: 'Dujardin') }
    image { Rack::Test::UploadedFile.new(File.join(Rails.root, 'public', 'test', 'articles', 'image_example.jpg')) }
    themes { [Theme.find_or_create_by(name: "L'argent")] }
    published_at { 1.day.ago }

    factory :unpublished_article do
      published_at { 1.day.from_now }
    end

  end

  factory :help_page do
    name "Changer la bannière"
    content "Rendez-vous sur la page de votre groupe..."
    category { HelpCategory.find_or_create_by(name: "Profil / gestion d'une oeuvre") }
  end

  factory :card_affiliation, class: Affiliation do
    name 'Eglise de Bulle'
  end

  factory :responsable do
    firstname "John"
    lastname "Smith"
    email { "#{firstname.downcase}@#{lastname.downcase}.com" }
  end

  factory :card_type do
    name "Totally new type"
  end

  factory :theme do
    name "Totally new theme"
  end

  factory :tag do
    name "Camp"
  end

  factory :parent do
    user { create(:user, firstname: "Paul", lastname: "Silias") }
    parent { User.find_by_firstname('g_admin') }
  end

  factory :location do
    post_name "Bulle"
    official_name "Bulle"
    npa 1630
    latitude 46
    longitude 7
    canton { Canton.find_or_create_by(name: "Fribourg", abbreviation: "FR") }
  end

  factory :action do
    name 'share'
  end
end