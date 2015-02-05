require 'rails_helper'
require 'controllers/shared_examples_for_admin_controller'

RSpec.describe Admin::ActionsController, :type => :controller do

  it_behaves_like "an admin controller", :action do

    def hash_name(object)
      @hash_name ||= :own_action
    end

  end

end