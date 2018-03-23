class String
  def to_bool
    return true if self =~ (/^(true|1)$/i)
    return false if self.blank? || self =~ (/^(false|0)$/i)
    raise ArgumentError.new("Invalid value for Boolean: \"#{self}\"")
  end
end

class TrueClass
  def to_i; 1; end
  def to_bool; self; end
end

class FalseClass
  def to_i; 0; end
  def to_bool; self; end
end

class NilClass
  def to_bool; false; end
end
