class SearchesController < BaseController

	def responsables
		if params[:attr].in? %[firstname lastname email]
			responsables = Responsable.where("#{params[:attr]} like ?", "%#{params[:term]}%" ).pluck(params[:attr])
			users = User.joins(:user_type).where("#{params[:attr]} like ? AND user_types.name != ?", "%#{params[:term]}%", "group" ).pluck(params[:attr])
			render json: (responsables + users).uniq
		else
			render nothing: true
		end
	end

	def affiliations
		if params[:attr].in? %[name]
			render json: Affiliation.where("#{params[:attr]} like ?", "%#{params[:term]}%" ).pluck(params[:attr])
		else
			render nothing: true
		end
	end

	def tags
		render json: Tag.where("name like ?", "%#{params[:query]}%" )
	end

	def actions
		if params[:attr].in? %[name]
			render json: Action.where("#{params[:attr]} like ?", "%#{params[:term]}%" ).pluck(params[:attr])
		else
			render nothing: true
		end
	end

	def locations
		data = Location.where("post_name ilike ? OR official_name ilike ?", "%#{params[:query]}%", "%#{params[:query]}%").map do |location|
			{
				"name" => "#{location.official_name} - #{location.post_name} - #{location.npa} - #{location.canton.name}",
				"id" => location.id
			}
		end
		render json: data
	end

end
