class SearchesController < BaseController

	def responsables
		if params[:attr].in? %[firstname lastname email]
			records = fetch_responsables_and_users(params)
			render json: records
		else
			render nothing: true
		end
	end

	def affiliations
		search(Affiliation, params)
	end

	def tags
		render json: Tag.where("name ilike ?", "%#{params[:query]}%" )
	end

	def actions
		search(Action, params)
	end

	def locations
		locations = Location.includes(:canton).where("post_name ilike ? OR official_name ilike ?", "%#{params[:query]}%", "%#{params[:query]}%").map do |location|
			{
				"name" => "#{location.official_name} - #{location.post_name} - #{location.npa} - #{location.canton.name}",
				"id" => location.id
			}
		end
		render json: locations
	end

	private

	def search(model, params)
		if params[:attr].in? %[name]
			render json: model.where("#{params[:attr]} ilike ?", "%#{params[:term]}%" ).pluck(params[:attr])
		else
			render nothing: true
		end
	end

	def fetch_responsables_and_users(params)
		responsables = Responsable.where("#{params[:attr]} ilike ?", "%#{params[:term]}%" ).pluck(params[:attr])
		users = User.joins(:user_type).where("#{params[:attr]} ilike ? AND user_types.name != ?", "%#{params[:term]}%", "group" ).pluck(params[:attr])
		return responsables.concat(users).uniq
	end

end
