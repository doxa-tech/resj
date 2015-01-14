class CardsController < BaseController
	before_action :connected_or_token?, only: [:overview, :team, :update]
	before_action :current_resource, only: [:update, :overview, :team, :team_update]
	before_action :authorize_modify, only: [:update, :overview, :team, :team_update]
	after_action only: [:update] { |c| c. track_activity @card }

	layout 'admin', only: [:team, :update, :overview]

	def index
		@cards = Card.search(params)
		@cards_paginate = @cards.paginate(page: params[:page], per_page: 10)

		respond_to do |format|
			format.html
			format.js
			format.json
		end

	end

	def show
		@card = Card.find(params[:id])
		category = HelpCategory.find_by_name("Profil / gestion d'une oeuvre")
		@help_url = "#{help_category_path(category)}##{CGI.escape 'Le bon format pour ma bannière et mon logo'}"
		js lat: @card.latitude
		js lng: @card.longitude
		render 'cards/images/loadimage' if request.xhr?
	end

	def overview
		@card = Card.find(params[:id])
		js lat: @card.latitude
		js lng: @card.longitude
	end

	def team
		@unconfirmed = @card.unconfirmed_users
		@pending = @card.pending_users.joins(:card_users)
		@confirmed = @card.confirmed_users
		@card_permission = CardPermission.new(card: @card)
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
  	@card ||= Card.find(params[:id])
  end

end