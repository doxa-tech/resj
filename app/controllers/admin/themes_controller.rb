class Admin::ThemesController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]
	after_action only: [:create, :update, :destroy] { |c| c. track_activity @theme }

	def index
		@table = Table.new(self, Theme)
		@table.respond
	end

	def new 
		@theme = Theme.new
	end

	def create 
		@theme = Theme.new(theme_params)
		if @theme.save
			redirect_to admin_themes_path, success: t('theme.admin.create.success')
		else
			render 'new'
		end
	end

	def edit
	end

	def update
		if @theme.update_attributes(theme_params)
			redirect_to admin_themes_path, success: t('theme.admin.edit.success')
		else
			render 'edit'
		end
	end

	def destroy
		@theme.destroy
		redirect_to admin_themes_path, success: t('theme.admin.destroy.success')
	end

	private

	def theme_params
		params.require(:theme).permit(:name)
	end

	def current_resource
		@theme = Theme.find_by_id(params[:id])
	end

end
