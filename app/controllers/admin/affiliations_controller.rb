class Admin::AffiliationsController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]

	def index
		@table = Table.new(view_context, Affiliation)
		respond_to do |format|
			format.html
			format.js { render 'sort' }
		end
	end

	def new 
		@affiliation = Affiliation.new
	end

	def create 
		@affiliation = Affiliation.new(affiliation_params)
		if @affiliation.save
			redirect_to admin_affiliations_path, success: t('affiliation.admin.create.success')
		else
			render 'new'
		end
	end

	def edit
	end

	def update
		if @affiliation.update_attributes(affiliation_params)
			redirect_to admin_affiliations_path, success: t('affiliation.admin.edit.success')
		else
			render 'edit'
		end
	end

	def destroy
		@affiliation.destroy
		redirect_to admin_affiliations_path, success: t('affiliation.admin.destroy.success')
	end

	private

	def affiliation_params
		params.require(:affiliation).permit(:name)
	end

	def current_resource
		@affiliation = Affiliation.find(params[:id])
	end

end
