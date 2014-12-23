module SubjectSearch
  extend ActiveSupport::Concern
  include TireSettings

  included do
    include TireMethods
    include Tire::Model::Search
    include Tire::Model::Callbacks

    settings = self.default_settings
    settings settings do
      mapping do
        indexes :name, analyzer: "partial_french", boost: 2
        indexes :description
        indexes :theme_ids, index: :not_analyzed, type: "integer", as: "theme_ids"
        indexes :theme_names, as: "theme_names"
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
      search = Subject.tire.search(load: true, per_page: Subject.count) do |s|
        s.query do |q|
          q.filtered do |f|
            unless params[:query].blank?
              f.query do |q|
                q.match [:name, :description, :theme_names], params[:query]
              end
            end
            f.filter :terms, theme_ids: params[:themes_ids] unless params[:themes_ids].blank?
          end
        end
      end
      @subjects = search.results
    end

  end

end