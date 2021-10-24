FactoryBot.define do

  factory :user do
    firstname { "John" }
    lastname { "Smith" }
    email { "#{firstname.downcase}@#{lastname.downcase}.com" }
    password { "choux" }
    password_confirmation { "choux" }
    reset_token { "xxx" }
    remember_token { "xxx" }
  end

  factory :orator do
    user 
    location
    street { "Route du moulin 12" }
    description { "A votre service !" }
  end

  factory :card do
    name { "Waykup" }
    description { "Un super groupe de jeunes" }
    street { "Route du verdel 8" }
    latitude { 46 }
    longitude { 7 }
    website { "waykup.ch" }
    user
    location { Location.find_by_official_name("Bulle") || create(:location) }
    card_type { :youth }

    factory :active_card do
      status { :online }
    end
  end

  factory :location do
    post_name { "Bulle" }
    official_name { "Bulle" }
    zip { 1630 }
    latitude { 46 }
    longitude { 7 }
    canton
  end

  factory :canton do
    name { "Fribourg" }
    abbreviation { "FR" }
  end

  factory :permission, class: "Adeia::Permission" do
    transient do
      element_name { "admin/users" }
    end
    
    owner { create(:group) }
    permission_type { :all_entries }
    element { create(:element, name: element_name) }
    read_right { true }
    create_right { false }
    update_right { false }
    destroy_right { false }
  end

  factory :group, class: "Adeia::Group" do
    name { "token" }
  end

  factory :element, class: "Adeia::Element" do
    name { "admin/users" }
  end

  factory :token, class: "Adeia::Token" do
    permission
    is_valid { true }
    exp_at { 1.year.from_now }
  end

end