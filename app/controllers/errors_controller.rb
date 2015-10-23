class ErrorsController < BaseController
  def page_not_found
    respond_to do |format|
      format.html { render 'page_not_found', status: 404 }
      format.all { render nothing: true, status: 404 }
    end
  end

  def unprocessable
    respond_to do |format|
      format.html { render 'unprocessable', status: 422 }
      format.all { render nothing: true, status: 422 }
    end
  end

  def internal_server_error
    respond_to do |format|
      format.html { render 'internal_server_error', status: 500 }
      format.all { render nothing: true, status: 500 }
    end
  end
end
