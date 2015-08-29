require 'abuilder'

module SubjectSearch
  extend ActiveSupport::Concern

  included do
    include Elasticsearch::Model
    include Elasticsearch::Model::Callbacks
    extend EsSettings

    after_touch { __elasticsearch__.index_document }

    settings index: default_settings do
      mapping do
        indexes :name, analyzer: :partial_french, boost: 10, type: :string
        indexes :description, type: :string
        indexes :themes do
          indexes :id, type: :integer
          indexes :name, type: :string
        end
      end
    end

    def as_indexed_json(options={})
      as_json(only: [:name, :description], include: { 
        themes: { only: [ :name, :id ] }
      })
    end
  end

  module ClassMethods

    def search(params)
      query = Jbuilder.encode do |j|
        j.size 1000
        j.query do
          j.filtered do
            unless params[:query].blank?
              j.query do
                j.multi_match do
                  j.fields ["name", "description", "themes.name"]
                  j.query params[:query]
                end
              end
            end
            j.filter do
              j.bool do
                j.must(Abuilder.build do
                  add({ terms: { "themes.id" => params[:theme_ids] }}) unless params[:theme_ids].blank?
                end)
              end
            end
          end
        end
      end
      @orators = Subject.__elasticsearch__.search(query).records
    end

  end

end