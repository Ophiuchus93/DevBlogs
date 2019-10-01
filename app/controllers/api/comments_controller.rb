class Api::CommentsController < ApplicationController
  before_action :set_post
  before_action :set_comment, only: [:show, :update, :destroy]
  def index
    render json: @post.comments 
  end

  def show
    render json: @comment
  end

  def create
    comment = Comment.new(comment_params)
  end

  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.error
    end
  end

  def destroy
  end


  private
  def set_post
    @post = Post.find(params[:id])
  end

  def set_comment
    @comment = Comment.find(params[:comment_id])
  end

  def comment_params
    params.require(:comment).permit(:body)
  end
end
