FactoryGirl.define do

  factory :user do
    firstname "John"
    lastname  "Smith"
    email "foos@bar.com"
    password "12341"
    password_confirmation "12341"
    user_type { UserType.find_by_name("user") }

    factory :confirmed_user do
      confirmed true
    end
  end

end