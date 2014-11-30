class Help::PagesController < BaseController

  def show
    @page = HelpPage.find(params[:id])
  end
end
