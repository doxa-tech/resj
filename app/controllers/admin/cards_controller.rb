class Admin::CardsController < Admin::BaseController
	before_action :current_resource, only: [:show, :edit, :update, :destroy]
	after_action only: [:create, :update, :destroy] { |c| c. track_activity @card }

	def index
		@table = CardTable.new(view_context, nil, search: true)
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
		owner = @card.responsables.select{ |r| r.is_contact == "true"}.first
		if @card.save
			@card.create_owner(owner)
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

	private

  def card_params
  	params.require(:card).permit(:name, :description, :street, :location_id, :status_id, :email, :place, :latitude, :longitude, :website, :password_digest, :card_type_id, :current_step, :tag_names, :avatar, :banner, :remove_banner, :remove_avatar, { parent_ids: [] }, responsables_attributes: [:id, :firstname, :lastname, :email, :_destroy, :is_contact], affiliations_attributes: [:id, :name, :_destroy])
  end

  def current_resource
  	@card = Card.find_by_id(params[:id])
  end
end
