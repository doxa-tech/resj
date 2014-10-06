class CardAffiliationsController < BaseController
	before_action :connected?
	before_filter :current_resource, only: [:create, :update, :destroy]
	before_action :authorize_create, only: [:create]
	before_action :authorize_modify, only: [:update, :destroy, :team]

	# Card's request to a user
	def create
		user = User.find_by_id(params[:user_id])
		if user && @card.send_request(user)
			UserMailer.request(@card, user).deliver
			track_activity @new_card_user
			redirect_to team_card_path(@card), success: t('card.user.request.success')
		else
			redirect_to team_card_path(@card), error: t('card.user.request.error')
		end
	end

	# Action on a user's request to an card
	def update
		user = User.find_by_id(params[:id])
		if user && @card.answer_request(user, params)
			track_activity @card_user
			redirect_to team_card_path(@card), success: t('card.user.confirmation.success')
		else
			redirect_to team_card_path(@card), error: t('card.user.confirmation.error')
		end
	end

	def destroy
		CardUser.where(user_id: params[:id], card_id: @card.id).first.destroy
		redirect_to team_card_path(@card), success: "Utilisateur supprimé"
	end

	private

	def current_resource
  	@card = Card.find(params[:card_id])
  end
end
