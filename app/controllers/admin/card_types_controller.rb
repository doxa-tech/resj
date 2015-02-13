class Admin::CardTypesController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]
	after_action only: [:create, :update, :destroy] { |c| c. track_activity @card_type }

	def index
		@table = Table.new(self, CardType)
		@table.respond
	end

	def new 
		@card_type = CardType.new
	end

	def create 
		@card_type = CardType.new(card_type_params)
		if @card_type.save
			redirect_to admin_card_types_path, success: t('card_type.admin.create.success')
		else
			render 'new'
		end
	end

	def edit
		@card_type = CardType.find(params[:id])
	end

	def update
		@card_type = CardType.find(params[:id])
		if @card_type.update_attributes(card_type_params)
			redirect_to admin_card_types_path, success: t('card_type.admin.edit.success')
		else
			render 'edit'
		end
	end

	def destroy
		@card_type.destroy
		redirect_to admin_card_types_path, success: t('card_type.admin.destroy.success')
	end

	private

	def card_type_params
		params.require(:card_type).permit(:name)
	end

	def current_resource
		@card_type = CardType.find_by_id(params[:id])
	end

end
