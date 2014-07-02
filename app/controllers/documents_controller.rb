class DocumentsController < BaseController
	before_action :authorize_resource

	def download_document
  	if @document = Document.find(params[:id])
  		track_activity @document
  		# http://bit.ly/1m2SOwI
  		# data = open("http://www.wizards.com/magic/rules/magicrulebook_10e_fr.pdf")
  		#send_data data.read, filename: "ResJ-#{File.basename(@document.file.path)}", disposition: 'attachment', x_sendfile: true, stream: 'true', buffer_size: '4096'
      redirect_to @document.file_url(:document), filename: "ResJ-#{File.basename(@document.file.path)}", disposition: 'attachment', x_sendfile: true, stream: 'true', buffer_size: '4096'
  	end
	end

  def download_video
    if @document = Document.find(params[:id])
      track_activity @document
      # http://bit.ly/1m2SOwI
      # data = open("http://www.wizards.com/magic/rules/magicrulebook_10e_fr.pdf")
      #send_data data.read, filename: "ResJ-#{File.basename(@document.file.path)}", disposition: 'attachment', x_sendfile: true, stream: 'true', buffer_size: '4096'
      redirect_to @document.file_url(:mp4), filename: "ResJ-#{File.basename(@document.file.path)}", disposition: 'attachment', x_sendfile: true, stream: 'true', buffer_size: '4096'
    end
  end

end
