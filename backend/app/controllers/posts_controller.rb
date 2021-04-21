class PostsController < ApplicationController
    def index
        @posts = Post.all
        render json: @posts
    end
    
    def create
        @post = Post.new(post_params)
        if @post.save
            render json: @post
        else
            render json: {error: 'Error Submitting Post'}
        end       
    end

    # def destroy
    #     @post = Post.find(params[:id])
    #     @post.destroy
    # end
    #not used

    
    private

    def post_params
        params.require(:post).permit(:name, :text)
    end
end
