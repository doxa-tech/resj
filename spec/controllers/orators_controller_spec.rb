require 'rails_helper'

RSpec.describe OratorsController, type: :controller do

  describe "#destroy" do

    it "deletes an orator" do
      @orator = create(:orator)
      request.cookies[:remember_token] = @orator.user.remember_token
      expect{
        delete :destroy, params: {id: @orator.id}
      }.to change{Orator.count}.by(-1)
    end

  end

end