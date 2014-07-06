class DocumentsController < BaseController
	before_action :authorize_resource

	def download
  	if @document = Document.find(params[:id])
  		track_activity @document
  		# http://bit.ly/1m2SOwI
  		# data = open("http://www.wizards.com/magic/rules/magicrulebook_10e_fr.pdf")
  		#send_data data.read, filename: "ResJ-#{File.basename(@document.file.path)}", disposition: 'attachment', x_sendfile: true, stream: 'true', buffer_size: '4096'
      redirect_to @document.file.url, filename: "ResJ-#{File.basename(@document.file.path)}", disposition: 'attachment', x_sendfile: true, stream: 'true', buffer_size: '4096'
  	end
	end

end
