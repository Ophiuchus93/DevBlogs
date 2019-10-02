class Api::UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end
end
