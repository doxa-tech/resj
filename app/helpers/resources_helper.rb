module ResourcesHelper

	def subject_type(subject)
		if subject.documents.count > 1
			subject.documents.each{|a| return "dossier" unless a.extension[0..2].in?(Document::VIDEO_EXT)}
			return "videos"
		elsif subject.documents.last.extension[0..2].in?(Document::VIDEO_EXT)
			return "video"
		else
			return subject.documents.last.extension[0..2]
		end
	end

	def document_type(document)
		ext = document.extension[0..2]
		if(ext.in?(Document::VIDEO_EXT))
			return "video"
		end
		return ext
	end

	# PRE: ext must be "mov, mp4, avi"
	def video_mime(ext)
		case ext
		when "mov"
			return "video/quicktime"
		when "mp4"
			return "video/mp4"
		when "avi"
			return "video/x-msvideo"
		else
			raise "Invalid ext type"
		end
	end

end
