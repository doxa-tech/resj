class CardsController < BaseController
	before_action :current_resource, only: [:edit, :update, :overview, :team, :user_confirmation, :user_request]
	before_action :authorize_modify, only: [:edit, :update, :overview, :team]
	before_action :authorize_action, only: [:user_confirmation, :user_request]
	after_action only: [:update] { |c| c. track_activity @card }

	def index
		# show all Card at once on the map if no searches (instead of pagination)
		if params[:query].blank? && params[:card_type_ids].blank? && params[:canton_ids].blank? && params[:tag_ids].blank?
			@cards = Card.active.with_card_type.order(:name).paginate(page: params[:page])
			@cards_map = Card.active.with_card_type
		else
			@search = Card.search(include: :card_type) do 
				fulltext params[:query], fields: [:name, :description, :canton_name, :tag_names]
				with(:card_type_id, params[:card_type_ids]) if params[:card_type_ids]
				with(:canton_ids, params[:canton_ids]) if params[:canton_ids]
				with(:tag_ids, params[:tag_ids]) if params[:tag_ids]
				with(:status_name, "En ligne")
				paginate page: params[:page] if params[:page]
			end
	  	@cards = @cards_map = @search.results
	  end
	 	# used to load the map
    if request.xhr?
      render 'index.js.erb'
    end
	end

	def show
		@card = Card.find(params[:id])
		js lat: @card.location.latitude
		js lng: @card.location.longitude
	end

	def overview
		@card = Card.find(params[:id])
		render layout: 'admin'
		js lat: @card.latitude
		js lng: @card.longitude
	end

	def team
		@unconfirmed = @card.unconfirmed_users
		@pending = @card.pending_users
		@confirmed = @card.confirmed_users
		@confirmed_paginate = @card.confirmed_users.paginate(page: params[:page], per_page: 10)
	end

	def update
		if @card.update_attributes(card_params)
			respond_to do |format|
				format.html { redirect_to edit_card_path(@card), success: t('card.edit.success') }
				format.js do 
					@value = @card.updated_attribute_value(params[:card].keys[0], params[:card].values[0])
					render 'overview_success'
				end
			end
		else
			respond_to do |format|
				format.html { render 'edit' }
				format.js { render 'overview_error' }
			end
		end
	end

	# Card's request to a user
	def user_request
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
	def user_confirmation
		card_user = CardUser.where(user_id: params[:user_id], card_id: @card.id).first
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

	private

  def card_params
  	params.require(:card).permit(:name, :description, :street, :location_id, :email, :place, :latitude, :longitude, :website, :password_digest, :card_type_id, :affiliation, :tag_names, :current_step, { parent_ids: [] }, responsables_attributes: [:id, :firstname, :lastname, :email, :_destroy, :is_contact])
  end

  def current_resource
  	@card = Card.find(params[:id])
  end

  # notify user that a card wants to be affiliated with user
	def send_request_mail(card, user)
		UserMailer.request(card, user).deliver
	end

end