# methods for a wizard

module Wizard
	attr_writer :current_step

  def current_step
  	@current_step
  end

  def next_step
  	steps[steps.index(current_step) + 1]
  end

  def previous_step
  	steps[steps.index(current_step) - 1]
  end

  def last_step
    steps.last
  end

  def first_step?
  	current_step == steps.first
  end

  def last_step?
  	current_step == steps.last 
  end

end