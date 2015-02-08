module CardsHelper
	def banner_src(card)
		if card.banner_url
			{ src: File.dirname(card.banner_url), filename: card.banner.file.filename }
		else
			{ src: "/assets/card/banner", filename: File.basename(asset_path "card/banner/default-banner.jpg") }
		end
	end

	def logo_src(card)
		if card.avatar_url
			{ src: File.dirname(card.avatar_url), filename: card.avatar.file.filename }
		else
			{ src: "/assets/card/logo", filename: File.basename(asset_path "card/logo/default-logo.jpg") }
		end
	end

end