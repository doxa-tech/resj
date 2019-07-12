module SlimSelect

  def slimselect(value, params={})
    klass = params[:from]
    raise ArgumentError, 'No `from` params specified' if klass.nil?
    find(".#{klass}").click
    find(".#{klass} div.ss-option", exact_text: value).click
  end
  
  def remote_slimselect(value, params={})
    klass = params[:from]
    raise ArgumentError, 'No `from` params specified' if klass.nil?
    find(".#{klass}").click
    find(".#{klass} div.ss-search input").set(value)
    first(".#{klass} div.ss-option").click
  end

end

World(SlimSelect)