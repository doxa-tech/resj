class Admin::BaseController < ApplicationController
	layout 'admin'
	before_action :connected?
	before_action :authorize_create, only: [:new, :create]
	before_action :authorize_modify, only: [:edit, :update, :destroy]

	def url_options
    { locale: (locale == :fr ? nil : locale), access: params[:access] }.merge(super)
  end

end
