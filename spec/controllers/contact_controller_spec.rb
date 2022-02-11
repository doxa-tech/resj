require 'rails_helper'

RSpec.describe ContactController, type: :controller do

  describe "#orator" do

    it "should not send a message to an invisible orator" do
      @orator = create(:orator, disabled: true)
      post :orator, params: { uuid: @orator.user.uuid }
      expect(flash[:error]).to eq "Des champs sont invalides"
    end

  end

end