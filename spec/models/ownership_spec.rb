require 'rails_helper'

RSpec.describe Ownership, :type => :model do

  describe "#search" do

    it "should find ownerships" do
      search = Ownership.search(element: "cards", type: "all_entries", right_read: true)
      where = Ownership.joins(:element, :ownership_type).where(elements: { name: "cards" }, ownership_types: { name: "all_entries"}, right_read: true)
      expect(search).to eq where
    end

  end

  describe "#add" do

    it "should create an ownership" do
      ownership = Ownership.add(element: "cards", type: "all_entries", right_read: true)
      expect(ownership.element.name).to eq "cards"
      expect(ownership.ownership_type.name).to eq "all_entries"
      expect(ownership.right_read).to eq true
    end

  end

end
