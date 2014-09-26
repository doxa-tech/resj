module FormsHelper

	def link_to_add_fields(name)
   	"<button type='button' id='add_field'>#{name}</button>".html_safe
	end

	def link_to_remove_fields(name)
		"<button type='button' id='remove_field'>#{name}</button>".html_safe
	end

	def link_to_add_contact(name)
		"<button type='button' class='add_contact'>#{name}</button>".html_safe
	end
end