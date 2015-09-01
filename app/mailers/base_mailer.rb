class BaseMailer < ActionMailer::Base
	default from: "\"Noémien de RES-J\" <noemien@resj.ch>"

	# To overwrite, absolutely need to reset them to nil !
	default 'X-MC-AutoText' => 1
	default 'X-MC-InlineCSS'=> "true"

	def params(params={})
		return headers['X-MC-MergeVars'] = params.to_json
	end

	def template(template)
		return headers['X-MC-Template'] = template
	end

	def mandrill_mail(to:, subject:, template:, params: {}, from: nil)
		mail to: to, subject: subject, from: from || self.class.default[:from], body:
			params(params)
			template(template)
	end
end