module Tire
  def self.models
    [Card, Orator, Subject]
  end

  def create_index
    Tire.models.each do |model|
      Tire.import_model(model, force: true)
    end
  end

  def self.import_model(klass, force: false)
    index = klass.tire.index
    Tire::Tasks::Import.add_pagination_to_klass(klass)

    Tire::Tasks::Import.delete_index(index) if force
    Tire::Tasks::Import.create_index(index, klass)

    Tire::Tasks::Import.import_model(index, klass, {})
  end
end

World(Tire)