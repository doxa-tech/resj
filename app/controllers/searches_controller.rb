class SearchesController < BaseController

	def responsables
		if params[:attr].in? %[firstname lastname email]
			render json: Responsable.where("#{params[:attr]} like ?", "%#{params[:term]}%" ).uniq.pluck(params[:attr])
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

	def themes
		render json: Theme.where("name like ?", "%#{params[:query]}%" )
	end

end
