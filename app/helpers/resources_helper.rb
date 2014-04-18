module ResourcesHelper

	def type(subject)
		if subject.documents.count > 1
			return "folder"
		else
			return subject.documents.last.extension
		end   
	end
	
end