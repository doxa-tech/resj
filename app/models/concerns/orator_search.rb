require 'abuilder'

module OratorSearch
  extend ActiveSupport::Concern

  included do
    include Elasticsearch::Model
    include Elasticsearch::Model::Callbacks
    extend EsSettings

    settings index: default_settings do
      mapping do
        indexes :user do
          indexes :firstname, analyzer: :partial_french, boost: 10, type: :string
          indexes :lastname, analyzer: :partial_french, boost: 10, type: :string
        end
        indexes :location do
          indexes :canton do
            indexes :id, type: :integer
            indexes :name, type: :string
          end
        end
        indexes :themes do
          indexes :id, type: :integer
          indexes :name, type: :string
        end
        indexes :disabled, type: :boolean
      end
    end

    def as_indexed_json(options={})
      as_json(only: [:disabled], include: { 
        user: { only: [:fistname, :lastname] },
        location: { only: [], include: { canton: { only: [:id, :name] } } },
        themes: { only: [ :name, :id ] }
      })
    end

  end


  module ClassMethods

    def search(params)
      query = Jbuilder.encode do |j|
        j.query do
          j.filtered do
            unless params[:query].blank?
              j.query do
                j.multi_match do
                  j.fields ["user.firstname", "user.lastname", "location.canton.name", "themes.name"]
                  j.query params[:query]
                end
              end
            end
            j.filter do
              j.bool do
                j.must(ABuilder.build do
                  add({ terms: { "location.canton.id" => params[:canton_ids] }}) unless params[:canton_ids].blank?
                  add({ terms: { "themes.id" => params[:themes_ids] }}) unless params[:themes_ids].blank?
                  add({ term: { "disabled" => false }})
                end)
              end
            end
          end
        end
        j.sort [{ "user.lastname" => { order: "asc" }}]
      end
      @orators = Card.__elasticsearch__.search(query)
    end

  end

end