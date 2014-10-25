FactoryGirl.define do

  factory :user do
    firstname "John"
    lastname  "Smith"
    email "foo@bar.com"
    password "12341"
    password_confirmation "12341"
    user_type { UserType.find_by_name("user") }
    confirmed true

    factory :unconfirmed_user do
      confirmed false
    end
  end

  factory :card do
    name "Waykup"
    description "Un super groupe de jeunes"
    street "Route du verdel 8"
    latitude 46
    longitude 7
    website "waykup.ch"
    user
    location { Location.find_by_official_name("Bulle") }
    status { Status.find_by_name("En cours de validation") }
    card_type { CardType.find_by_name("Groupe de jeunes") }

    after(:create) do |card|
      card.user.ownerships.create(element_id: Element.find_by_name('cards').id, ownership_type_id: OwnershipType.find_by_name('on_entry').id, id_element: card.id, right_read: true, right_update: true, right_create: true)
      card.user.ownerships.create(element_id: Element.find_by_name('card_affiliations').id, ownership_type_id: OwnershipType.find_by_name('on_entry').id, id_element: card.id, right_create: true, right_delete: true, right_update: true, right_read: true)
    end
  end

end