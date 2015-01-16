module ModelTire
  def self.models
    [Card, Orator, Subject]
  end

  def self.create_index
    puts "======================"
    puts "[Tire] Start indexing"
    ModelTire.models.each do |model|
      ModelTire.import_model(model, force: true)
    end
    puts "[Tire] Finish indexing"
    puts "======================"
  end

  def self.import_model(klass, force: false)
    index = klass.tire.index
    Tire::Tasks::Import.add_pagination_to_klass(klass)

    Tire::Tasks::Import.delete_index(index) if force
    Tire::Tasks::Import.create_index(index, klass)

    Tire::Tasks::Import.import_model(index, klass, {})
  end
end

ModelTire.create_index