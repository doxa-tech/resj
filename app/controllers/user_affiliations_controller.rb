class UserAffiliationsController < BaseController
	before_filter :connected?
	layout 'admin'

	def my_cards
		@user = current_user
		@unconfirmed = @user.unconfirmed_cards
		@pending = @user.pending_cards
		@confirmed = @user.confirmed_cards
		@confirmed_paginate = @user.confirmed_cards.paginate(page: params[:page], per_page: 10)
	end

	# User's request to a card
	def create
		card_user = CardUser.where(user_id: current_user.id, card_id: params[:card_id]).first
		card = Card.find(params[:card_id])
		if card_user && card_user.card_validated == false && card_user.updated_at < 1.weeks.ago
			card_user.update_attribute(:card_validated, nil)
			send_request_mail(current_user, card)
			redirect_to user_my_cards_path, success: t('user.card.request.success')
		elsif card_user && card_user.user_validated == false
			card_user.update_attribute(:user_validated, true)
			send_request_mail(current_user, card)
			redirect_to user_my_cards_path, success: t('user.card.request.success')
		elsif !card_user && card && card.user_id != current_user.id
			new_card_user = CardUser.create(user_id: current_user.id, card_id: card.id, user_validated: true)
			track_activity new_card_user
			send_request_mail(current_user, card)
			redirect_to user_my_cards_path, success: t('user.card.request.success')
		else
			redirect_to user_my_cards_path, error: t('user.card.request.error')
		end
	end

	# Action on a card's request to an user
	def update
		card_user = CardUser.where(user_id: current_user.id, card_id: params[:id]).first
		if card_user && card_user.user_id == current_user.id && params[:validated].in?(["false", "true"])
			card_user.update_attribute(:user_validated, params[:validated])
			replace_responsable(current_user, card_user.card)
			if params[:validated] == "true"
				track_activity card_user
				CardMailer.confirmed_user(current_user, card_user.card).deliver
			else
				CardMailer.unconfirmed_user(current_user, card_user.card).deliver
			end
			redirect_to user_my_cards_path, success: t('user.card.confirmation.success')
		else
			redirect_to user_my_cards_path, error: t('user.card.confirmation.error')
		end
	end

	# Cancel a request
	def destroy
		CardUser.where(user_id: current_user.id, card_id: params[:id]).first.destroy
		redirect_to user_my_cards_path, success: 'Requête annulée'
	end

	private

	# notify card owner that a user wants to join
	def send_request_mail(user, card)
		CardMailer.request(user, card)
	end
end
