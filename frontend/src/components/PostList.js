import React from 'react'
import {connect} from 'react-redux'
import { deletePost } from '../actions/deletePost'
import LikeButton from './LikeButton'


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
    <LikeButton />
    </div>)}
     <br/>
    </div>
    )
}

export default connect (null, {deletePost})(PostList)

