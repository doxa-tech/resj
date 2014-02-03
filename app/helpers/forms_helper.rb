module FormsHelper

	def link_to_add_fields(name)
    link_to_function(name, "add_fields(this)")
	end

	def link_to_remove_fields(name)
		link_to_function(name, "remove_fields(this)")
	end

	def link_to_add_contact(name)
		link_to_function(name, "add_contact(this)")
	end
end