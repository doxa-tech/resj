class Admin::CardsController < Admin::BaseController
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
		@card.affiliations.build
		@card.responsables.build
	end

	def create
		@card = Card.new(card_params)
		if @card.save
			redirect_to admin_cards_path, success: t('card.admin.create.success')
		else
			render 'new'
		end
	end

	def edit
		@card = Card.find(params[:id])
		@card.affiliations.build
		@card.responsables.build
	end

	def update
		@card = Card.find(params[:id])
		if @card.update_attributes(card_params)
			redirect_to admin_cards_path, success: t('card.admin.edit.success')
		else
			render 'edit'
		end
	end

	def destroy
		Card.find(params[:id]).destroy
		redirect_to admin_cards_path
	end

	# Add a verification on a card by an user
	def verificate
		CardVerification.create(user_id: current_user.id, card_id: params[:id])
	end

	private

  def card_params
  	params.require(:card).permit(:name, :description, :street, :npa, :city, :email, :place, :website, :password_digest, :card_type_id, :current_step, :validated, responsables_attributes: [:firstname, :lastname, :email, :_destroy], responsable_attributes: [:firstname, :lastname, :email], affiliations_attributes: [:name, :_destroy] ) if params[:card]
  end

  # Control if the user already verified
  def verified?
  	redirect_to root_path unless CardVerification.where('user_id = ? AND card_id = ?', current_user.id, params[:id])
  end
end
