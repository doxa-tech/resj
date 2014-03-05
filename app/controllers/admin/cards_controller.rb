class Admin::CardsController < Admin::BaseController
	before_action :current_resource, only: [:show, :edit, :update, :destroy, :verificate]
	before_action :authorize_action, only: [:verificate]
	before_action :verified?, only: [:verificate]

	def index
		@table = CardTable.new(view_context)
		respond_to do |format|
			format.html
			format.js { render 'sort' }
		end
	end

	def new
		@card = Card.new
	end

	def show
	end

	def create
		@card = Card.new(card_params)
		if @card.save
			@card.create_owner
			redirect_to admin_cards_path, success: t('card.admin.create.success')
		else
			render 'new'
		end
	end

	def edit
	end

	def update
		if @card.update_attributes(card_params)
			CardMailer.validated(checkers_emails).deliver if params[:card][:validated] == "true"
			redirect_to admin_cards_path, success: t('card.admin.edit.success')
		else
			render 'edit'
		end
	end

	def destroy
		@card.destroy
		redirect_to admin_cards_path
	end

	# Add a verification on a card by an user
	def verificate
		CardVerification.create(user_id: current_user.id, card_id: @card.id)
		if @card.verified?
			@card.update_attribute(:visible, true)
			CardMailer.verified(card_admins).deliver
			# CardMailer
			# CardMailer pour les responsable
			# CardMailer
		end
	end

	private

	def attributes
		["name", "description", "street", "location_id", "email", "place", "latitude", "longitude", "website", "password_digest", "card_type_id", "card_id", "current_step", "validated", "tag_names", "avatar", "banner", "remove_avatar", "remove_banner", "responsables_attributes" => ["id", "firstname", "lastname", "email", "_destroy", "is_contact"], "affiliations_attributes" => ["id", "name", "_destroy"]]
	end

  def card_params
  	params.require(:card).permit(current_permission.reject_params(params[:controller], attributes, ["validated"]))
  end

  # Control if the user already verified
  def verified?
  	if @card.users.pluck(:id).include? current_user.id || @card.verified?
  		redirect_to admin_cards_path
  	end
  end

  def current_resource
  	@card = Card.find(params[:id])
  end

  def checkers_emails
  	@checkers_emails ||= User.joins(:ownerships, ownerships: [:actions, :element]).where(elements: {name: "admin/cards"}, actions: {name: "verificate"})
  end

  def card_admins
  	@card_admins ||= User.joins(:ownerships, ownerships: [:actions, :element]).where(elements: {name: "admin/cards"}, actions: {name: ["verificate", "validated"]})
  end
end
