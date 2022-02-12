require 'rails_helper'

RSpec.describe ContactController, type: :controller do

  describe "#orator" do

    it "should not send a message to an invisible orator" do
      @orator = create(:orator, disabled: true)
      expect{ 
        post :orator, params: { id: @orator.id }
      }.to raise_error ActiveRecord::RecordNotFound
    end

  end

end