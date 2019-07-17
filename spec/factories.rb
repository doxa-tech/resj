FactoryBot.define do

  factory :user do
    firstname { "John" }
    lastname { "Smith" }
    email { "#{firstname.downcase}@#{lastname.downcase}.com" }
    password { "choux" }
    password_confirmation { "choux" }
  end 

end