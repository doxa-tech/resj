class Cards::WizardsController < BaseController
	after_action only: [:create] { |c| c. track_activity @card }

	def new
		session[:card_params] ||= {}
		@card = Card.new(session[:card_params])
		@card.current_step ||= @card.steps.first
		js step: @card.current_step 
	end

	# Change wizard steps
	def change
		if !session[:card_params].nil?
			# fusion between session and form (POST) params
			session[:card_params].deep_merge!(card_params)
			@card = Card.new(session[:card_params])
			if @card.steps.include?(step = params[:step].keys.first) && (@card.current_step == "final" || @card.valid?)
				# update the step
				@card.current_step = step
				session[:card_params]["current_step"] = @card.current_step
			end
		else
			render js: "location.reload();"
		end
	end

	def create
		@card = Card.new(session[:card_params])
		@card.status = Status.find_by_name("En cours de validation")
		owner = @card.responsables.select{ |r| r.is_contact == "true"}.first
		if @card.save
			@card.owner = owner
			# for validator
			CardMailer.admin_created(validator_emails, @card).deliver_later
			session.delete(:card_params)
			flash[:success] = "Vous êtes entré dans le réseau avec succès ! Votre groupe n'apparaît pas directement sur la carte car elle doit d'abord être validée."
			render 'redirect', locals: { path: "/reseau" }
		else
			render 'error'
		end
	end

	private

	def validator_emails
  	@validator_emails ||= User.joins(:ownerships, ownerships: [:element]).where(elements: {name: 'admin/card_statuses'}, ownerships: {right_update: true}).pluck(:email)
  end

  def card_params
  	params.require(:card).permit(:name, :description, :street, :location_id, :email, :place, :latitude, :longitude, :website, :password_digest, :card_type_id, :affiliation, :tag_names, :current_step, { parent_ids: [] }, responsables_attributes: [:id, :firstname, :lastname, :email, :_destroy, :is_contact])
  end

end
