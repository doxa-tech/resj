require 'rails_helper'
require 'controllers/shared_examples_for_admin_controller'

RSpec.describe Admin::HelpPagesController, :type => :controller do

  it_behaves_like "an admin controller", :help_page do

    def var_name(object)
      @var_name ||= :page
    end

  end

end