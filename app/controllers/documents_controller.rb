class DocumentsController < BaseController
	before_action :authorize_resource

	def download
  	if @document = Document.find(params[:id])
  		send_file @document.file.path, disposition: 'attachment', x_sendfile: true
  	end
	end

end
