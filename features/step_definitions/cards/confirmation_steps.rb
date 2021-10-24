Given("I have a complete card") do
  @card = create(:card, user: @user)
end

When("I visit the card confirmation page") do
  visit confirmation_cards_wizard_path(Card.last)
end