class Admin::CardStatusesController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update]
	after_action only: [:update] { |c| c. track_activity @card }

	def index
		@table = CardTable.new(view_context, search(Card, [:status_name]).results)
		respond_to do |format|
			format.html
			format.js { render 'sort' }
		end
	end

	def edit
	end

	def update
		if @card.update_attribute(:status_id, params[:card][:status_id])
			redirect_to admin_card_statuses_path, success: t('card_status.admin.edit.success')
		else
			render 'edit'
		end
	end

	private

	def current_resource
		@card = Card.find(params[:id])
	end
end
