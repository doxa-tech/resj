module AutosaveAssociatedRecords

  def find_or_create_related(model, objects)
    objects.reject{ |r| r._destroy == true}.map do |object|
      model.where(name: object.name).first_or_create
    end
  end

end