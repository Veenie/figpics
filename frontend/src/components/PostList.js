import React from 'react'
import {connect} from 'react-redux'
import { deletePost } from '../actions/deletePost'



class PostList extends React.Component{
    //console.log(props)

    state = {votes: 0}

    handleDelete = (postId) => {
        // debugger
        this.props.deletePost(postId)

    }

    // handleEvent = () => {
    //     this.setState({votes: this.state.votes + 1})
    // }


    render()   { 
        
    return(

    <div>  {this.props.posts.map(post => 
    <div key={post.id}>
    <h3> {post.text} </h3>
    <footer>- {post.name}</footer>
    <button onClick={() => this.handleDelete(post.id)}>Delete</button>
    {/* <button onClick={() => this.handleEvent}>Upvote</button>
    <h3>{this.state.votes}</h3> */}
    </div>)}
     <br/>
    </div>
    )
}

}
export default connect (null, {deletePost})(PostList)

//functional components for displaying posts
//pass props as an argument since not a class, so will not use 'this.props'
//does not require render, just a return
//functional components are basically just functions (generally, home is a good example of a simple one)