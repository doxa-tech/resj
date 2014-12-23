module CardSearch
	extend ActiveSupport::Concern
  include TireSettings

	included do
    include TireMethods
    include Tire::Model::Search
    include Tire::Model::Callbacks

    settings = self.default_settings
    settings settings do
      mapping do
        indexes :name, analyzer: "partial_french"
        indexes :canton_id, index: :not_analyzed, type: "integer", as: "location.canton.id"
        indexes :canton_name, as: "location.canton.name"
        indexes :card_type_id, index: :not_analyzed, type: "integer", as: "card_type.id"
        indexes :tag_ids, index: :not_analyzed, type: "integer", as: "tag_ids"
        indexes :tag_names, as: "tags_names"
        indexes :status_name, index: :not_analyzed, as: "status.name"
      end
    end
	end

  def tag_ids
    tags.pluck(:id)
  end

  def tags_names
    tags.pluck(:name)
  end

  module ClassMethods

    def search(params)
      search = Card.tire.search(load: true, per_page: Card.count) do |s|
        s.query do |q|
          q.filtered do |f|
            unless params[:query].blank?
              f.query do |q|
                q.match [:name, :canton_name, :tag_names], params[:query]
              end
            end
            f.filter :terms, canton_id: params[:canton_ids] unless params[:canton_ids].blank?
            f.filter :terms, card_type_id: params[:card_type_ids] unless params[:card_type_ids].blank?
            f.filter :terms, tag_ids: params[:tag_ids] unless params[:tag_ids].blank?
            f.filter :term, status_name: "En ligne"
          end
        end
        s.sort do |sort|
          sort.by :name, { order: 'asc', ignore_unmapped: true }
        end
      end
      @cards = search.results
    end
  end

end