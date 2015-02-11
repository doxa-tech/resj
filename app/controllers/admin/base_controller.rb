class Admin::BaseController < ApplicationController
	layout "admin"
  before_action :authorize_index, only: [:index]
	before_action :authorize_create, only: [:new, :create]
	before_action :authorize_modify, only: [:edit, :update, :destroy]
end
