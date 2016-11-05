module EsCallbacks
  extend ActiveSupport::Concern

  included do
    after_commit lambda { __elasticsearch__.index_document  },  on: [:create, :update]
    after_commit lambda { __elasticsearch__.delete_document },  on: :destroy
  end

  def update_index(records)
    __elasticsearch__.index_document
  end

end
