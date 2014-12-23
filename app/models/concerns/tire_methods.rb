module TireMethods
  extend ActiveSupport::Concern

  included do

    def update_index(obj)
      tire.update_index
    end

    after_touch { tire.update_index }

  end

end