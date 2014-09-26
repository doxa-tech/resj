class CardWizardsController < ApplicationController
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
			user_hash = @card.create_owner(owner)
			# for validator
			CardMailer.admin_created(validator,@card).deliver
			# for owner
			CardMailer.owner_created(@card, user_hash).deliver
			session[:card_params] = nil
			flash[:success] = "Vous êtes entré dans le réseau avec succès !"
			render 'redirect', locals: { path: "/reseau" }
		else
			render 'form_error'
		end
	end

	private

	def validator
  	@validator ||= User.joins(:ownerships, ownerships: [:actions]).where(actions: {name: "validated"}).first
  end

  def card_params
  	params.require(:card).permit(:name, :description, :street, :location_id, :email, :place, :latitude, :longitude, :website, :password_digest, :card_type_id, :affiliation, :tag_names, :current_step, { parent_ids: [] }, responsables_attributes: [:id, :firstname, :lastname, :email, :_destroy, :is_contact])
  end

end
