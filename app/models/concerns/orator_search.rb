module OratorSearch
  extend ActiveSupport::Concern
  include TireSettings

  included do
    include TireMethods
    include Tire::Model::Search
    include Tire::Model::Callbacks

    settings = self.default_settings
    settings settings do
      mapping do
        indexes :firstname, analyzer: "partial_french", as: "user.firstname"
        indexes :lastname, analyzer: "partial_french", as: "user.lastname"
        indexes :canton_name, as: "location.canton.name"
        indexes :canton_id, index: :not_analyzed, type: "integer", as: "location.canton.id"
        indexes :theme_ids, index: :not_analyzed, type: "integer", as: "theme_ids"
        indexes :theme_names, as: "theme_names"
        indexes :disabled, type: "boolean"
      end
    end
  end

  def theme_ids
    themes.pluck(:id)
  end

  def theme_names
    themes.pluck(:name)
  end

  module ClassMethods

    def search(params)
      search = Orator.tire.search(load: true) do |s|
        s.query do |q|
          q.filtered do |f|
            unless params[:query].blank?
              f.query do |q|
                q.match [:firstname, :lastname, :canton_name, :theme_names], params[:query]
              end
            end
            f.filter :term, disabled: false
            f.filter :terms, canton_id: params[:canton_ids] unless params[:canton_ids].blank?
            f.filter :terms, theme_ids: params[:themes_ids] unless params[:themes_ids].blank?
          end
        end
        s.sort { by :lastname, 'asc' }
      end
      @orators = search.results.paginate(page: params[:page])
    end

  end

end