class Orator < ActiveRecord::Base
  belongs_to :user
  belongs_to :location
  has_many :orator_themes
  has_many :themes, through: :orator_themes
  has_many :orator_disponibilities
  has_many :disponibilities, through: :orator_disponibilities

  validates :location_id, presence: true
  validates :themes, presence: true
  
  searchable do
    text :firstname
    text :lastname
    string :lastname
    text :canton_name
    text :theme_names
    integer :canton_ids, multiple: true
    integer :themes_ids, multiple: true
    boolean :disabled
  end

  def to_param
    "#{id}-#{firstname}-#{lastname}".parameterize
  end

  def firstname
    user.firstname
  end

  def lastname
    user.lastname
  end

  def canton_ids
    location.canton.id  
  end

  def canton_name
    location.canton.name
  end

  def themes_ids
    themes.pluck(:id)
  end

  def theme_names
    themes.pluck(:name)
  end

  def self.to_map(orators)
    result = []
    grouped = orators.group_by{ |a| [a.location]} 
    grouped.values.each do |group|
      names = ""
      group.each do |orator|
        names += %Q[
                <p>
                  #{orator.user.firstname} #{orator.user.lastname} 
                  <span class="link_orator" data-id="#orator#{orator.id}">
                    voir
                  </span>
                </p>]
      end
      txt = %Q[
                <div class="infowindow">
                  <p class="location">#{group.first.location.full_name}</p>
                  <p class="info">#{group.size} orateur#{'s' if group.size > 1} dans cette région</p>
                  #{names}
                </div>
              ].html_safe
      result.push({lat: group.first.location.latitude, lng: group.first.location.longitude, txt: txt})
    end
    result
  end

end
