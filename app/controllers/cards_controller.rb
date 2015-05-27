class CardsController < BaseController
	before_action :current_resource, only: [:update, :overview]
	before_action :authorize_modify, only: [:update]
	before_action :authorize_or_redirect, only: [:overview]
	after_action only: [:update] { |c| c. track_activity @card }

	layout 'admin', only: [:update, :overview]

	def index
    fjs true
		respond_to do |format|
			format.html
			format.json { @cards = Card.search(params).order(:name) }
		end
	end

	def show
		@card = Card.find(params[:id])
		category = HelpCategory.find_by_name("Profil / gestion d'une oeuvre")
		@help_url = "#{help_category_path(category)}##{CGI.escape 'Le bon format pour ma bannière et mon logo'}"
		js lat: @card.latitude
		js lng: @card.longitude
	end

	def overview
		@card = Card.find(params[:id])
		js lat: @card.latitude
		js lng: @card.longitude
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

  def current_resource
  	@card ||= Card.find(params[:id])
  end

  def authorize_or_redirect
    access = PermissionAccess.new(self, params[:controller], params[:action], current_resource)
  	if !access.authorized?(:modify)
      redirect_to card_team_path(@card)
    end
  end

end