require 'rails_helper'
require 'controllers/shared_examples_for_admin_controller'

RSpec.describe Admin::ArticlesController, :type => :controller do

  it_behaves_like "an admin controller", :article do

    def object_params(object)
      build(:article).attributes.merge(
        "image" => Rack::Test::UploadedFile.new(File.join(Rails.root, 'public', 'test', 'articles', 'image_example.jpg'), "image/jpg"),
        "theme_ids" => [Theme.first.id]
      )
    end

    def attribute
      @attribute ||= :title
    end

  end

end