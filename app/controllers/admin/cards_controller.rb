class Admin::CardsController < ApplicationController
	before_action :verified?, only: [:verificate]

	def index
		@cards = Card.all 
	end

	def edit
		@card = Card.find(params[:id])
	end

	def update
		@card = Card.find(params[:id])
		if @card.update_attributes(card_params)
			redirect_to admin_cards_path, success: t('card.edit.success')
		else
			render 'edit'
		end
	end

	def verificate
		CardVerification.create(user_id: current_user.id, card_id: params[:id])
	end

	private

  def card_params
  	params.require(:card).permit(:name, :description, :street, :npa, :city, :contact, :email, :place, :website, :password_digest, :responsables, :card_type_id, :validated)
  end

  def verified?
  	CardVerification.where('user_id = ? AND card_id = ?', current_user.id, params[:id])
  end
end
