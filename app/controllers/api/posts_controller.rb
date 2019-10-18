class Api::PostsController < ApplicationController
  # include DeviseTokenAuth::Concerns::SetUserByToken
  before_action :authenticate_user!, only: [:show, :update, :destroy, :create]
  # before_action :set_user, only: [:index]
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    render json: Post.all
  end

  def show
    render json: @post
  end

  def create
    post = current_user.posts.new(title: params[:title], body: params[:body])
    file = params[:file]

    if file
      begin
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        post.image = cloud_image["secure_url"]
        # rescue => e
        #   render json: { errors: e}, status: 422
      end
    end

    if post.save
      render json: post
    else
      render json: { errors: post.errors }, status: 422
    end
  end

  def update
      file = params[:file]

      if file == ''
            puts 'file is an empty string'
      else
        begin
          cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
          @post.image = cloud_image['secure_url']
        end
      end
      
      if @post.update(title: params[:title], body: params[:body])
        render json: Post.all
      end
  end

  def destroy
    @post.destroy
  end

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
