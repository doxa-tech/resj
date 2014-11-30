class Help::CategoriesController < ApplicationController

  def index
    @categories = Help::Category.all
  end
end
