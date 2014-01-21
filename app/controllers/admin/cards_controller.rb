class Admin::CardsController < Admin::BaseController
	before_action :verified?, only: [:verificate]
	before_action :current_resource, only: [:edit, :update, :destroy]

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

	def create
		@card = Card.new(card_params)
		if @card.save
			redirect_to admin_cards_path, success: t('card.admin.create.success')
		else
			render 'new'
		end
	end

	def edit
	end

	def update
		if @card.update_attributes(card_params)
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
		CardVerification.create(user_id: current_user.id, card_id: params[:id])
	end

	private

	def attributes
		["name", "description", "street", "npa", "city", "email", "place", "website", "password_digest", "card_type_id", "current_step", "validated", "tag_names", "responsables_attributes" => ["firstname", "lastname", "email", "_destroy"], "responsable_attributes" => ["firstname", "lastname", "email"], "affiliations_attributes" => ["name", "_destroy"]]
	end

  def card_params
  	params.require(:card).permit(current_permission.reject_params(params[:controller], attributes, ["validated"]))
  end

  # Control if the user already verified
  def verified?
  	redirect_to root_path unless CardVerification.where('user_id = ? AND card_id = ?', current_user.id, params[:id])
  end

  def current_resource
  	@card = Card.find(params[:id]) if params[:id]
  end
end
