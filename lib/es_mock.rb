require 'es_proxy_mock'

module EsMock
  module ClassMethods

    def __elasticsearch__
      return EsProxyMock
    end

    def search(*args)
      return {}
    end

  end

  def __elasticsearch__
    return EsProxyMock
  end

  def self.prepended(base)
    class << base
      prepend ClassMethods
    end  
  end  
end