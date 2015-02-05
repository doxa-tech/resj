require 'rails_helper'
require 'controllers/shared_examples_for_admin_controller'

RSpec.describe Admin::ThemesController, :type => :controller do

  it_behaves_like "an admin controller", :theme

end