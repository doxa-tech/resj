class CardsController < BaseController
	before_action :connected_or_token?, only: [:overview, :team, :update]
	before_action :current_resource, only: [:update, :overview, :team, :team_update]
	before_action :authorize_modify, only: [:update, :overview, :team, :team_update]
	after_action only: [:update] { |c| c. track_activity @card }

	layout 'admin', only: [:team, :update, :overview]

	def index
		@search = Card.search(include: :card_type) do 
			fulltext params[:query] if params[:query]
			with(:card_type_id, params[:card_type_ids]) if params[:card_type_ids]
			with(:canton_ids, params[:canton_ids]) if params[:canton_ids]
			with(:tag_ids, params[:tag_ids]) if params[:tag_ids]
			with(:status_name, "En ligne")
			paginate page: params[:page], per_page: Card.count
		end
		@cards = @search.results		
		@cards_paginate = @cards.paginate(page: params[:page])

		respond_to do |format|
			format.html
			format.js
			format.json
		end

	end

	def show
		@card = Card.find(params[:id])
		js lat: @card.latitude
		js lng: @card.longitude
	end

	def overview
		@card = Card.find(params[:id])
		js lat: @card.latitude
		js lng: @card.longitude
	end

	def team
		@unconfirmed = @card.unconfirmed_users
		@pending = @card.pending_users
		@confirmed = @card.confirmed_users
		@confirmed_paginate = @card.confirmed_users.paginate(page: params[:page], per_page: 10)
	end

	def team_update
		if @card.update_attributes(team_params)
			flash[:success] = "Responsables édités"
			render 'redirect', locals: {path: team_card_path(@card) }
		else
			render 'form_error', locals: {object: @card }
		end
	end

	def update
		if @card.update_attributes(card_params)
			respond_to do |format|
				format.html { redirect_to overview_card_path(@card), success: t('card.edit.success') }
				format.js do 
					@value = @card.updated_attribute_value(params[:card].keys[0], params[:card].values[0])
					render 'overview_success'
				end
			end
		else
			respond_to do |format|
				format.html { render 'overview' }
				format.js { render 'overview_error' }
			end
		end
	end

	private

  def card_params
  	params.require(:card).permit(:name, :description, :street, :location_id, :email, :place, :latitude, :longitude, :website, :password_digest, :card_type_id, :affiliation, :tag_names, :current_step, { parent_ids: [] })
  end

  def team_params
  	params.require(:card).permit(responsables_attributes: [:id, :firstname, :lastname, :email, :_destroy, :is_contact])
  end

  def current_resource
  	@card = Card.find(params[:id])
  end

end