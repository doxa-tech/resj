module ResourcesHelper

	def type(subject)
		if subject.documents.count > 1
			return "folder"
		else
			return subject.documents.last.extension[0..2]
		end   
	end
	
end