class BaseController < ApplicationController

	def authorize_resource
		if current_user.nil? || (!current_permission.allow_resource? && !current_permission.allow_read?('admin/subjects'))
			store_location
			redirect_to connexion_path, error: "Not authorize"
		end
	end
	
end
