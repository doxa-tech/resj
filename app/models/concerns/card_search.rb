module CardSearch
	extend ActiveSupport::Concern

	included do
    searchable do
      text :name, boost: 10
      string :name
      text :description, boost: 5
      text :canton_name
      text :s_tag_names
      text :status_name
      string :status_name
      integer :card_type_id, multiple: true
      integer :canton_ids, multiple: true
      integer :tag_ids, multiple: true
    end
	end

  def canton_ids
    location.canton.id
  end

  def tags_ids
    tags.pluck(:id)
  end

  def s_tag_names
    tags.pluck(:name)
  end

  def canton_name
    location.canton.name
  end

  def status_name
    status.name
  end
end