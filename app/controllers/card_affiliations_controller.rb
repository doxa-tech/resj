class CardAffiliationsController < BaseController
	before_action :connected?
	before_filter :current_resource, only: [:create, :update, :destroy]
	before_action :authorize_create, only: [:create]
	before_action :authorize_modify, only: [:update, :destroy, :team]

	# Card's request to a user
	def create
		card_user = CardUser.where(user_id: params[:user_id], card_id: @card.id).first
		user = User.find(params[:user_id])
		if card_user && card_user.user_validated == false && card_user.updated_at < 1.weeks.ago
			card_user.update_attribute(:user_validated, nil)
			send_request_mail(@card, user)
			redirect_to team_card_path(@card), success: t('card.user.request.success')
		elsif card_user && card_user.card_validated == false
			card_user.update_attribute(:card_validated, true)
			send_request_mail(@card, user)
			redirect_to team_card_path(@card), success: t('card.user.request.success')
		elsif !card_user && user && @card.user_id != params[:user_id]
			new_card_user = CardUser.create(user_id: user.id, card_id: @card.id, card_validated: true)
			track_activity new_card_user
			send_request_mail(@card, user)
			redirect_to team_card_path(@card), success: t('card.user.request.success')
		else
			redirect_to team_card_path(@card), error: t('card.user.request.error')
		end
	end

	# Action on a user's request to an card
	def update
		card_user = CardUser.where(user_id: params[:id], card_id: @card.id).first
		if card_user && card_user.card_id == @card.id && params[:validated].in?(["false", "true"])
			card_user.update_attribute(:card_validated, params[:validated])
			replace_responsable(card_user.user, @card)
			if params[:validated] == "true"
				track_activity card_user
				UserMailer.confirmed_card(@card, card_user.user).deliver
			else 
				UserMailer.unconfirmed_card(@card, card_user.user).deliver
			end
			redirect_to team_card_path(@card), success: t('card.user.confirmation.success')
		else
			redirect_to team_card_path(@card), error: t('card.user.confirmation.error')
		end
	end

	def destroy
		CardUser.where(user_id: params[:id], card_id: @card.id).first.destroy
		redirect_to team_card_path(@card), success: "Requête annulée"
	end

	private

	def current_resource
  	@card = Card.find(params[:card_id])
  end

  # notify user that a card wants to be affiliated with user
	def send_request_mail(card, user)
		UserMailer.request(card, user).deliver
	end
end
