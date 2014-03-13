class CardsController < BaseController
	before_action :current_resource, only: [:edit, :update, :user_confirmation, :user_request]
	before_action :authorize_modify, only: [:edit, :update]
	before_action :authorize_action, only: [:user_confirmation, :user_request]

	def index
		@search = Card.search do 
			fulltext params[:query]
			with(:card_type_id, params[:card_type_ids]) if params[:card_type_ids]
			with(:canton_ids, params[:canton_ids]) if params[:canton_ids]
			with(:tag_ids, params[:tag_ids]) if params[:tag_ids]
			paginate page: params[:page] if params[:page]
		end
  	@cards = @search.results
	end

	def show
		@card = Card.find(params[:id])
	end

	def overview
		@card = Card.find(params[:id])
	end

	def new
		session[:card_params] ||= {}
		@card = Card.new(session[:card_params])
		@card.current_step ||= @card.steps.first 
	end

	# Change wizard steps
	def change
		# fusion between session and form (POST) params
		session[:card_params].deep_merge!(card_params)
		@card = Card.new(session[:card_params])
		if @card.valid? && @card.steps.include?(step = params[:step].keys.first)
			# update the step
			@card.current_step = step
			session[:card_params]["current_step"] = @card.current_step
		end
	end

	def create
		@card = Card.new(session[:card_params])
		owner = @card.responsables.select{ |r| r.is_contact == "true"}.first
		if @card.save
			@card.create_owner(owner)
			# CardMailer.created(validator).deliver
			CardMailer.welcome(@card).deliver
			session[:card_params] = nil
			redirect_to reseau_path, success: t('card.create.success')
		else
			render 'new'
		end
	end

	def edit
	end

	def update
		if @card.update_attributes(card_params)
			redirect_to edit_card_path(@card), success: t('card.edit.success')
		else
			render 'edit'
		end
	end

	def user_request
		card_user = CardUser.where(user_id: params[:user_id], card_id: @card.id).first
		user = User.find(params[:user_id])
		if card_user && card_user.user_validated == false && card_user.updated_at < 1.months.ago
			card_user.update_attribute(:user_validated, nil)
			redirect_to edit_admin_card_path(@card), success: t('card.user.request.success')
		elsif card_user.card_validated == false
			card_user.update_attribute(:card_validated, true)
			redirect_to edit_admin_card_path(@card), success: t('card.user.request.success')
		elsif card_user && user
			CardUser.create(user_id: user.id, card_id: @card.id, card_validated: true)
			redirect_to edit_admin_card_path(@card), success: t('card.user.request.success')
		else
			redirect_to edit_admin_card_path(@card), success: t('card.user.request.error')
		end
	end

	def user_confirmation
		card_user = CardUser.find(params[:card_user_id])
		if card_user && card_user.card_id == @card.id && params[:validated].in?(["false", "true"])
			card_user.update_attribute(:card_validated, params[:validated])
			replace_responsable(card_user.user, @card)
			redirect_to edit_admin_card_path(@card), success: t('card.user.confirmation.success')
		else
			redirect_to edit_admin_card_path(@card), error: t('card.user.confirmation.error')
		end
	end

	private

  def card_params
  	params.require(:card).permit(:name, :description, :street, :location_id, :email, :place, :latitude, :longitude, :website, :password_digest, :card_type_id, :affiliation, :card_id, :tag_names, :current_step, responsables_attributes: [:id, :firstname, :lastname, :email, :_destroy, :is_contact])
  end

  def current_resource
  	@card = Card.find(params[:id])
  end

  def validator
  	@validator ||= User.joins(:ownerships, ownerships: [:actions]).where(actions: {name: "validated"}).first
  end

end