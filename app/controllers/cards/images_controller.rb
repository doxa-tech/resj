class Cards::ImagesController < BaseController
	before_action :current_resource
	before_action :authorize_modify

	def banner
	end

	def avatar
	end

	def upload_banner
		@card.banner = params[:card][:banner]
		if @card.save
			render 'banner_success'
		else
			render 'error'
		end
	end

	def upload_avatar
		@card.avatar = params[:card][:avatar]
		if @card.save
			render 'avatar_success'
		else
			render 'error'
		end
	end

	def remove_banner
		@card.remove_banner!
		if @card.save
			render 'banner_success'
		else
			render 'error'
		end
	end

	def remove_avatar
		@card.remove_avatar!
		if @card.save
			render 'avatar_success'
		else
			render 'error'
		end
	end

	private

	def current_resource
		@card = Card.find(params[:card_id])
	end	

	def authorize_modify
    PermissionAccess.new(self, 'cards', params[:action], current_resource).authorize(:modify)
  end

end
