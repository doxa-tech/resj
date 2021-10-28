class ErrorsController < ApplicationController

  def display
    status = params[:code] || "500"
    render status, status: status, layout: "admin"
  end

end
