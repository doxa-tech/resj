require 'rails_helper'
require 'controllers/shared_examples_for_admin_controller'

RSpec.describe Admin::ParentsController, :type => :controller do

  it_behaves_like "an admin controller", :parent do

    def attribute
      @attribute ||= :user_id
    end

  end

end