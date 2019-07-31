Given("I have a completed card") do
  @card = create(:card)
end

When("I visit the card confirmation page") do
  visit confirmation_cards_wizard_path(Card.last)
end