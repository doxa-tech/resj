require "rails_helper"

RSpec.describe ArticlesController, :type => :controller do

  context "published article" do

    let!(:article) { create(:article) }

    describe "GET #index" do

      it "should display a published article" do
        get :index
        expect(assigns(:articles)).to include(article)
      end
    end

    describe "GET #show" do

      it "should display a published article" do
        get :show, params: { id: article.id }
        expect(assigns(:article)).to eq(article)
      end
    end

  end

  context "unpublished article" do

    let!(:article) { create(:unpublished_article) }

    describe "GET #index" do

      it "should not display an unpublished article" do
        get :index
        expect(assigns(:articles)).to_not include(article)
      end
    end

    describe "GET #show" do

      it "should not display an unpublished article" do
        expect { get :show, params: { id: article.id }}.to raise_error(ActiveRecord::RecordNotFound)
      end
    end

  end

end
