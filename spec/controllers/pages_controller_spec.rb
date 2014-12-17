require "rails_helper"

RSpec.describe PagesController, :type => :controller do

  context "published article" do

    let!(:article) { create(:article) }

    describe "GET #home" do

      it "should display a published article" do
        get :home
        expect(assigns(:article)).to eq(article)
      end
    end

    describe "GET #resources" do

      it "should display a published article" do
        get :resources
        expect(assigns(:article)).to eq(article)
      end
    end

  end

  context "unpublished article" do

    let!(:article) { create(:unpublished_article) }

    describe "GET #home" do

      it "should not display an unpublished article" do
        get :home
        expect(assigns(:article)).to_not eq(article)
      end
    end

    describe "GET #resources" do

      it "should display a published article" do
        get :resources
        expect(assigns(:article)).to_not eq(article)
      end
    end

  end

end