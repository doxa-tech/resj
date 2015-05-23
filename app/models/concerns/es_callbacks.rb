module EsCallbacks
  extend ActiveSupport::Concern

  included do
    after_commit lambda { __elasticsearch__.index_document  },  on: :create
    after_commit lambda { __elasticsearch__.delete_document },  on: :destroy
  end

  def index_with_belongs_to(*args)
    fields = args.map { |e| self.class.reflect_on_association(e).foreign_key }
    if (fields - __elasticsearch__.instance_variable_get(:@__changed_attributes).keys).length < fields.length
      puts "BELONGS"
      __elasticsearch__.index_document
    else
      puts "Update"
      __elasticsearch__.update_document
    end
  end

end