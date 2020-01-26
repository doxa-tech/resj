FactoryBot.define do

  factory :user do
    firstname { "John" }
    lastname { "Smith" }
    email { "#{firstname.downcase}@#{lastname.downcase}.com" }
    password { "choux" }
    password_confirmation { "choux" }
  end 

  factory :orator do
    user 
    location
    street { "Route du moulin 12" }
    phone { "+41797891011" }
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

end