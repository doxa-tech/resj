class Admin::AccessTokensController < Admin::BaseController
	before_action :current_resource, only: [:destroy]

	def index
		@table = AccessTokenTable.new(view_context, nil, { buttons: false } ) 
	end

	def create
		@access_token = AccessToken.new(access_token_params)
		@access_token.is_valid = true
		@access_token.token = SecureRandom.urlsafe_base64
		if @access_token.save
			redirect_to admin_access_tokens_path, success: t('access_token.admin.create.success')
		else
			render 'index'
		end
	end

	def destroy
		@access_token.destroy
		redirect_to admin_access_tokens_path, success: t('access_token.admin.destroy.success')
	end

	private

	def access_token_params
		params.require(:access_token).permit(:ownership_id)
	end

	def current_resource
		@access_token = AccessToken.find(params[:id])
	end
end
