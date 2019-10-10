class Api::UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.all
  end

def update
    user = User.find(params[:id])
    user.name = params[:firstName] ? params[:firstName] : user.firstName
    user.name = params[:lastName ? params[:lastName] : user.lastName
    user.email = params[:email] ? params[:email] : user.email
    
#     file = params[:file]
    
#     if file
#       begin
#         ext = File.extname(file.tempfile)
#         cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
#         user.image = cloud_image['secure_url']
#       rescue => e
#         render json: { errors: e }, status: 422
#       end
#     end
    
#     if user.save
#       render json: user
#     else
#       render json: { errors: user.errors.full_messages }, status: 422
#     end
#   end

def update
  user = User.find(params[:id])
  user.firstName = params[:firstName] ? params[:firstName] : user.firstName
  user.lastName = params[:lastName] ? params[:lastName] : user.lastName
  user.email = params[:email] ? params[:email] : user.email
  
  file = params[:file]
  
  if file == ''
    puts 'file is an Empty String.  Upload valid file.'
  else
    begin
      ext = File.extname(file.tempfile)
      cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
      user.image = cloud_image['secure_url']
    # rescue => e
    #   render json: { errors: e }, status: 422
    end
  end
  
  if user.save
    render json: user
  else
    render json: { errors: user.errors.full_messages }, status: 422
  end
end

  def show
    render json: User.find(params[:id])
  end
end
