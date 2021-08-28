class OratorsController < ApplicationController

  def index
    respond_to do |format|
			format.json { @orators = search }
		end
  end

  def new
    @orator = Orator.new
    @orator.user = User.new unless signed_in?
  end

  def create
    @orator = Orator.new(orator_params)
    @orator.user = current_user if current_user
    if @orator.save
      redirect_to root_path, success: "Bienvenue dans le réseau des orateurs"
    else
      render 'new'
    end
  end

  def show
    @orator = Orator.find(params[:id])
  end

  private

  def search
    clean(params)
    orators = Orator.all
    if params[:name].present?
      orators = orators.where("firstname ilike ?", "%#{params[:name]}%")
    end
    if params[:cantons].present?
      orators = orators.joins(:location).where(locations: { canton_id: params[:cantons] })
    end
    if params[:themes].present?
      orators = orators.joins(:orator_themes).where(orator_themes: { theme_id: params[:tags] })
    end
    return orators
  end

  def clean(params)
    # reject empty strings and convert values to an integer ("string".to_i returns 0)
    [params[:cantons], params[:themes]].compact.each do |p| 
      p.reject! { |c| c.empty? }
      p.map! { |c| c.to_i }
    end
  end

  def orator_params
    attributes = [:description, :street, :location_id, :phone, :disponibility, theme_ids: [], disponibility_ids: []]
    attributes.push(user_attributes: [:firstname, :lastname, :email, :password, :password_confirmation]) unless signed_in?
    params.require(:orator).permit(attributes)
  end

end
