module ApplicationHelper

	def link_to_active(label,path)
		link_to label, path, class: (current_page?(path)? 'active' : nil)
	end

	def mask_email(email)
		email.gsub(/(?<=.{2}).(.*@)/, '*****@')
	end

	def map_users(users)
		users.map{ |user| [user.full_name, user.email]}
	end

	def paginate_range(collection)
		count = collection.count
	  endnumber = collection.offset + collection.per_page > count ? count : collection.offset + collection.per_page
		startnumber = collection.count > 0 ? collection.offset+1 : 0
		"#{startnumber}-#{endnumber} de #{count}"  
	end

	def accepted_canton
		return %w[FR VD VS NE GE JU BE]
	end

end
