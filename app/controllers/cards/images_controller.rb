class Cards::ImagesController < BaseController

	def banner
	end

	def avatar
	end

	def upload_banner
		
	end

	def upload_avatar
		
	end

	private

	def current_resource
		@card = Card.find(params[:card_id])
	end	

end
