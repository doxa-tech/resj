class EsProxyMock

  def self.method_missing(m, *args, &block)  
    return EsProxyMock
  end

end