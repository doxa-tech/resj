module Selectize

	def fill_in_selectized(id, params={})
		find("##{id} + .selectize-control input").set params[:with]
		wait_for_ajax
		first('.option', text: /#{params[:with]}/).click
	end

end

World(Selectize)