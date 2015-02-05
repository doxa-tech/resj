require 'rails_helper'
require 'controllers/shared_examples_for_admin_controller'

RSpec.describe Admin::AffiliationsController, :type => :controller do

  it_behaves_like "an admin controller", :affiliation do

    def factory(object)
      @factory ||= :card_affiliation
    end

  end

end