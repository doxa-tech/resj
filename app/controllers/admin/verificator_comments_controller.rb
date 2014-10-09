class Admin::VerificatorCommentsController < Admin::BaseController
	before_action :current_resource, only: [:update, :destroy]

	def create
		@card = Card.find(params[:card_id])
		@verificator_comment = @card.verificator_comments.new(verificator_comment_params)
		@verificator_comment.user = current_user
		if @verificator_comment.save
			render 'create_success'
		else
			render 'error'
		end
	end

	def update
		if @verificator_comment.update_attributes(verificator_comment_params)
			render 'update_success'
		else
			render 'error'
		end
	end

	def destroy
		@verificator_comment.destroy
		redirect_to edit_admin_card_path(@verificator_comment.card), success: t('verificator_comment.admin.destroy.success')
	end

	private

	def verificator_comment_params
		params.require(:verificator_comment).permit(:content)
	end

	def current_resource
		@verificator_comment = VerificatorComment.find_by_id(params[:id])
	end
end
