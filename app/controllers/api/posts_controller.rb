class Api::PostsController < ApplicationController
  # include DeviseTokenAuth::Concerns::SetUserByToken
  before_action :authenticate_user!
  # before_action :set_user, only: [:index]
  # before_action :set_post, only: [:show, :update, :destroy]

  def index
    render json: Post.all
  end

  # def show
  #   render json: @post
  # end

  # def create
  #   post = post.new(post_params)
  # end

  # def update
  #    if @post.update(post_params)
  #     render json: @post
  #    else
  #     render json: @post.error
  #    end
  # end

  # def destroy
  #   @post.destroy
  # end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :body, :image)
  end
end
