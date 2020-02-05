namespace :seed do

  desc "Setup the superuser"
  task superuser: :environment do
    user = User.create!(
      firstname: "Keran",
      lastname: "Kocher",
      email: "kocher.ke@gmail.com",
      confirmed: true,
      password: "12341",
      password_confirmation: "12341"
    )
    puts "User created with id=#{user.id}"
  end

  desc "Initialize adeia elements"
  task adeia_elements: :environment do
    ENV['elements'] = "admin/cards"
    Rake::Task["adeia:permissions"].invoke
  end

  # Create the superuser group in adeia
  # rake adeia:superuser user_id=59

end
