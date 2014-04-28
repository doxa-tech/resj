class BaseMailer < ActionMailer::Base
	default from: "\"Noémien de RES-J\" <noemien@resj.ch>"
	#
	# To overwrite, absolutely need to reset them to nil !
	#
	default 'X-MC-AutoText' => 1
	default 'X-MC-InlineCSS'=> "true"

	def params(a={})
		return headers['X-MC-MergeVars'] = a.to_json
	end

	def template(a)
		return headers['X-MC-Template'] = a
	end

end