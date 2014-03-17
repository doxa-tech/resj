module ResourcesHelper

	def type(subject)
		if subject.resources.count > 1
			return "folder"
		else
			return subject.resources.last.file.file.extension.downcase[0..2]
		end   
	end
	
end