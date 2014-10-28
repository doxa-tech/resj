module Selectize

	def fill_in_selectized(id, params={})
		find("##{id} + .selectize-control input").set params[:with]
		if has_css?('.option', text: /#{params[:with]}/)
			first('.option', text: /#{params[:with]}/).click
		end
	end

end

World(Selectize)