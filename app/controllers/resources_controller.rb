class ResourcesController < BaseController
	before_action :authorize_resource

	def index
		@resources = Resource.all
	end

	def download
  	@resource = Resource.find(params[:id])
  	send_file @resource.file.path, disposition: 'attachment', x_sendfile: true
	end

	private

	def authorize_resource
		if current_user.nil? || (!current_permission.allow_resource? && !current_permission.allow_read?('admin/resources'))
			store_location
			redirect_to connexion_path, error: "Not authorize"
		end
	end
end
