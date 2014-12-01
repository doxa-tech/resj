class Admin::HelpPagesController < Admin::BaseController
  before_action :current_resource, only: [:edit, :update, :destroy]
  after_action only: [:create, :update, :destroy] { |c| c. track_activity @page }

  def index
    @table = Table.new(view_context, HelpPage)
    respond_to do |format|
      format.html
      format.js { render 'sort' }
    end
  end

  def new
    @page = HelpPage.new
  end

  def create 
    @page = HelpPage.new(help_page_params)
    if @page.save
      redirect_to admin_help_pages_path, success: t('help_page.admin.create.success')
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @page.update_attributes(help_page_params)
      redirect_to admin_help_pages_path, success: t('help_page.admin.edit.success')
    else
      render 'edit'
    end
  end

  def destroy
    @page.destroy
    redirect_to admin_help_pages_path, success: t('help_page.admin.destroy.success')
  end

  private

  def help_page_params
    params.require(:help_page).permit(:name, :content, :help_category_id)
  end

  def current_resource
    @page = HelpPage.find_by_id(params[:id])
  end
end
