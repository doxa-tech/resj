module TireAssociations

  def saving_reindex(model, collection=nil)
    if collection
      model.index.import collection
    else
      model.import
    end
  end

  def destroying_reindex(model)
    model.import
  end

end