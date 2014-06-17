class CardsController < BaseController
	before_action :current_resource, only: [:edit, :update, :overview, :team, :user_confirmation, :user_request]
	before_action :authorize_modify, only: [:edit, :update, :overview, :team]
	before_action :authorize_action, only: [:user_confirmation, :user_request]
	after_action only: [:create, :update] { |c| c. track_activity @card }

	def index
		if params[:query].blank?
			@cards = Card.order(:name).paginate(page: params[:page])
			@cards_map = Card.all
		else
			@search = Card.search do 
				fulltext params[:query]
				with(:card_type_id, params[:card_type_ids]) if params[:card_type_ids]
				with(:canton_ids, params[:canton_ids]) if params[:canton_ids]
				with(:tag_ids, params[:tag_ids]) if params[:tag_ids]
				paginate page: params[:page] if params[:page]
			end
	  	@cards = @cards_map = @search.results
	  end
	end

	def show
		@card = Card.find(params[:id])
	end

	def overview
	end

	def team
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
		if @card.steps.include?(step = params[:step].keys.first) && (@card.current_step == "final" || @card.valid?)
			# update the step
			@card.current_step = step
			session[:card_params]["current_step"] = @card.current_step
		end
	end

	def create
		@card = Card.new(session[:card_params])
		owner = @card.responsables.select{ |r| r.is_contact == "true"}.first
		if @card.save
			user_hash = @card.create_owner(owner)
			# for validator
			CardMailer.admin_created(validator,@card).deliver
			# for owner
			CardMailer.owner_created(@card, user_hash).deliver
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

	def user_confirmation
		card_user = CardUser.find(params[:card_user_id])
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

  def validator
  	@validator ||= User.joins(:ownerships, ownerships: [:actions]).where(actions: {name: "validated"}).first
  end

  # notify user that a card wants to be affiliated with user
	def send_request_mail(card, user)
		UserMailer.request(card, user).deliver
	end

end