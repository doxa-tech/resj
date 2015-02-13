module Renderer

  def present
    render_to_string('app/tables/templates/base', layout: false, locals: { presenter: self }).html_safe
  end

  def respond
    respond_to do |format|
      format.html
      format.js { render 'app/tables/templates/sort' }
    end
  end

end