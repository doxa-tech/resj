class Help::CategoriesController < BaseController

  def index
    @categories = HelpCategory.all
  end

  def show
    @category = HelpCategory.find(params[:id])
  end
end
