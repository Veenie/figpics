class PostsController < ApplicationController
    def index
        @posts = Post.all
        render json: @posts
    end

    #alternate way to do this is render json: Post.all
    
    def create
        #binding.pry
        @post = Post.new(post_params)
        if @post.save
            render json: @post
        else
            render json: {error: 'Error Submitting Post'}
        end       
    end

    #pry to check our params to see if frontend data is coming in

    def destroy
        #binding.pry
        @post = Post.find(params[:id])
        @post.destroy
        render json: @post
    end

    #need to be sure to render json here so frontend can be sent a response so it can delete as well
    #otherwise only backend will work

    
    private

    def post_params
        params.require(:post).permit(:name, :text)
    end

    #specify attributes a post can be created with
end
