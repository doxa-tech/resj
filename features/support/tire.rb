module Tire
  def self.models
    [Card, Orator, Subject]
  end

  def create_index
    Tire.models.each do |model|
      model.import
    end
  end

  def delete_index
    Tire.models.each do |model|
      model.tire.index.delete
    end
  end
end

World(Tire)