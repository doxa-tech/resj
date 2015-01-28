require 'rails_helper'
require 'controllers/shared_examples_for_admin_controller'

RSpec.describe Admin::TagsController, :type => :controller do

  it_behaves_like "an admin controller", :tag

end