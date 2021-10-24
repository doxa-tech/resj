module ChoicesSelect

  def choiceselect(value, params={})
    klass = params[:from]
    raise ArgumentError, 'No `from` params specified' if klass.nil?
    find(".choices.#{klass}").click
    find(".choices.#{klass} .choices__item--choice", exact_text: value).click
  end
  
  def remote_choiceselect(value, params={})
    klass = params[:from]
    raise ArgumentError, 'No `from` params specified' if klass.nil?
    find(".choices.#{klass}").click
    find(".choices.#{klass} input.choices__input").set(value)
    find(".choices.#{klass}").first(".choices__item--choice:not(.has-no-choices)").click
  end

  def fill_choiceselect(klass, params={})
    value = params[:with]
    raise ArgumentError, 'No `with` params specified' if value.nil?
    find(".choices.#{klass} input.choices__input--cloned").set(value + "\n")
  end

end

World(ChoicesSelect)