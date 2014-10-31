class Cards::ImagesController < BaseController
	before_filter :current_resource

	def banner
	end

	def avatar
	end

	def upload_banner
		@card.banner = params[:card][:banner]
		if @card.save
			render 'success'
		else
			render 'error'
		end
	end

	def upload_avatar
		@card.avatar = params[:card][:avatar]
		if @card.save
			render 'success'
		else
			render 'error'
		end
	end

	private

	def current_resource
		@card = Card.find(params[:card_id])
	end	

end
