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

end