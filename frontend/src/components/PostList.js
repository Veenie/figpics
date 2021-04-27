import React from 'react'
import {connect} from 'react-redux'
import { deletePost } from '../actions/deletePost'



const PostList = (props) => {
    //console.log(props)

    const handleDelete = (postId) => {
        // debugger
        props.deletePost(postId)

    }


    return(

    <div>  {props.posts.map(post => 
    <div key={post.id}>
    <h3> {post.text} </h3>
    <footer>- {post.name}</footer>
    <button onClick={() => handleDelete(post.id)}>Delete</button>
    </div>)}
     <br/>
    </div>
    )
}

export default connect (null, {deletePost})(PostList)

//functional components for displaying posts
//pass props as an argument since not a class, so will not use 'this.props'
//does not require render, just a return
//functional components are basically just functions (generally, home is a good example of a simple one)