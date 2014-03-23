class DocumentsController < BaseController
	before_action :authorize_resource

	def download
  	if @document = Document.find(params[:id])
  		data = open(@document.file.url) 
  		send_data data.read, filename: "ResJ-#{File.basename(@document.file.path)}", disposition: 'attachment', x_sendfile: true
  	end
	end

end
