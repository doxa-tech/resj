class Abuilder

  def initialize(&b)
    @array = []
    instance_eval &b
  end

  def self.build(&b)
    new(&b).array.compact
  end

  def add(item)
    @array << item
  end

  def array
    @array
  end

end