class CardsController < BaseController
	before_action :current_resource, only: [:update, :overview, :destroy, :transfer]
	before_action :authorize_modify, only: [:update, :destroy]
  #before_action :authorize_action, only: [:transfer]
	before_action :authorize_or_redirect, only: [:overview]
	after_action only: [:update, :destroy] { |c| c. track_activity @card }

	layout 'admin', only: [:update, :overview]

	def index
    js true
		respond_to do |format|
			format.html
			format.json { @cards = Card.search(params).includes(:card_type, :inverse_parents) }
		end
	end

	def show
		@card = Card.find(params[:id])
		category = HelpCategory.find_by_name("Profil / gestion d'une oeuvre")
		@help_url = "#{help_category_path(category)}##{CGI.escape 'Le bon format pour ma bannière et mon logo'}"
		js true, lat: @card.latitude, lng: @card.longitude
	end

	def overview
		@card = Card.find(params[:id])
		js true, lat: @card.latitude, lng: @card.longitude
	end

	def update
		if @card.update_attributes(card_params)
			respond_to do |format|
				format.js do
					@value = @card.updated_attribute_value(params[:card].keys[0], params[:card].values[0])
					render 'cards/overview/success'
				end
			end
		else
			respond_to do |format|
				format.js { render 'cards/overview/error' }
			end
		end
	end

  def destroy
    if params[:card_name] == @card.name
      @card.destroy
      flash[:success] = "Votre groupe a été supprimé"
      render 'redirect', locals: { path: user_my_cards_path }
    elsif params[:card_name].present?
      @card.errors.add(:name, "ne correspond pas")
      render 'cards/destroy/error'
    end
  end

  def transfer
    if params[:card_name] && params[:user]
       @user = User.find_by(id: params[:user])
       @card.errors.add(:user, "n'est pas valide") if @user.nil? || @user == @card.user
       @card.errors.add(:name, "ne correspond pas") if params[:card_name] != @card.name
       if @card.errors.any?
         render 'cards/destroy/error'
       else
         @card.update_attribute(:user, @user)
         flash[:success] = "Votre groupe a été transféré"
         render 'redirect', locals: { path: user_my_cards_path }
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
