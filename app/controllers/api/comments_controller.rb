class Api::CommentsController < ApplicationController
    before_action :set_post
    before_action :set_comment, only: [:show, :update, :destroy]
    def index
        render json: @post.comments.all
    end
    def show
        render json: @comment
    end
    def create
        comment = @post.comments.new(comment_params)
        comment[:user_id] = current_user.id
        if comment.save
            render json: comment
        else
            render json: { errors: comment.errors }, status: :unprocessable_entity 
        end
    end
    def update
        @comment.update(comment_params)
        render json: @comment
    end
    def destroy
        @comment.destroy
        render json: { message: 'Comment deleted' }
    end
    
    private
    
    def set_post
        @post = post.find(params[:post_id])
    end
    def set_comment
        @comment = Comment.find(params[:id])
    end
    def comment_params
        params.require(:comment).permit(:body)
    end
end


