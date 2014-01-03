module ApplicationHelper

	def present(table)
		render 'table', presenter: table
	end
end
