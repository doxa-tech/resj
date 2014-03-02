class Admin::CardTypesController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]

	def index
		@table = Table.new(view_context, CardType)
		respond_to do |format|
			format.html
			format.js { render 'sort' }
		end
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
		CardType.find(params[:id]).destroy
		redirect_to admin_card_types_path, success: t('card_type.admin.destroy.success')
	end

	private

	def card_type_params
		params.require(:card_type).permit(:name)
	end

	def current_resource
		@card_type = CardType.find(params[:id])
	end

end
