require "rails_helper"

RSpec.describe Card, type: :model do

  it "set last_updated to the current time" do
    card = create(:card)
    expect(card.last_updated).not_to be_nil  
  end

end
