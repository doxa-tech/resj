module Multiselect

  def multiselect(id, params={})
    find("#ms-#{id} .ms-selectable").find('span', text: params[:with]).click
  end

end

World(Multiselect)