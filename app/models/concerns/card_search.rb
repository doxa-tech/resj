require 'abuilder'

module CardSearch
	extend ActiveSupport::Concern

	included do
    include Elasticsearch::Model
    include EsCallbacks
    extend EsSettings

    after_touch { __elasticsearch__.index_document }
    after_commit lambda { index_with_belongs_to(:status, :location) }, on: :update

    settings index: default_settings do
      mapping do
        indexes :name, type: :multi_field, fields: { 
          name: { type: :string, analyzer: :partial_french, boost: 10}, 
          lowercase: { type: :string, analyzer: :case_insensitive_sort } 
        }
        indexes :card_type_id, type: :integer
        indexes :tags do
          indexes :id, type: :integer
          indexes :name, type: :string
        end
        indexes :location do
          indexes :canton do
            indexes :id, type: :integer
            indexes :name, type: :string
          end
        end
        indexes :status do
          indexes :name, type: :string, index: :not_analyzed
        end
      end
    end

    def as_indexed_json(options={})
      as_json(only: [:name, :card_type_id], include: { 
        location: { only: [], include: { canton: { only: [:id, :name] } } },
        status: { only: [:name] },
        tags: { only: [:name, :id] }
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
                  j.fields ["name", "location.canton.name", "tags.name"]
                  j.query params[:query]
                end
              end
            end
            j.filter do
              j.bool do
                j.must(Abuilder.build do
                  add({ terms: { "location.canton.id" => params[:canton_ids] }}) unless params[:canton_ids].blank?
                  add({ terms: { "card_type_id" => params[:card_type_ids] }}) unless params[:card_type_ids].blank?
                  add({ terms: { "tags.id" => params[:tag_ids] }}) unless params[:tag_ids].blank?
                  add({ term: { "status.name" => "En ligne" }})
                end)
              end
            end
          end
        end
        j.sort [{ "name.lowercase" => { order: "asc" }}] if params[:query].blank?
      end
      @cards = Card.__elasticsearch__.search(query).records
    end
  end

end