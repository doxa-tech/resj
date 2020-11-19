class Admin::CardsController < Admin::BaseController
  load_and_authorize

  def index
    @table = CardTable.new(self, @cards, search: true)
  end

end
