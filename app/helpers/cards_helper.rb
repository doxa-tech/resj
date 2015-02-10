module CardsHelper
	def banner_src(card)
		if card.banner_url
			{ src: File.dirname(card.banner_url), filename: card.banner.file.filename }
		else
			{ src: "/card/banner", filename: File.basename("default-banner.jpg") }
		end
	end

	def logo_src(card)
		if card.avatar_url
			{ src: File.dirname(card.avatar_url), filename: card.avatar.file.filename }
		else
			{ src: "/card/logo", filename: File.basename("default-logo.jpg") }
		end
	end

end