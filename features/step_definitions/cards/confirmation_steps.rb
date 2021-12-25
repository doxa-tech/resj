Given("I have a complete card") do
  @card = create(:card, user: @user)
end

Given('I have a card that must be confirmed') do
  @card = create(:card, user: @user, validity: :solicited)
end

Given("I have an incomplete card") do
  visit "/cards/wizards/new"
  step "I complete the first step and submit it"
  step "I complete the second step and submit it"
  step "I complete the third step and submit it"
end

When("I visit the card confirmation page") do
  card = @card || Card.rewhere(status: :incomplete).last
  visit confirmation_cards_wizard_path(card)
end