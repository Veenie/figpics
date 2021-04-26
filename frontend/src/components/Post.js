import React from 'react'
import { deletePost } from '../actions/deletePost'
import {connect} from 'react-redux'

const Post = (props) => {
//console.log(props)



return (
    <div className='post'>
    <h3>
        {props.post.text}
    </h3>
    <footer>- {props.post.name}</footer>
    <button
    onClick={() => deletePost(props.post.id)}
    >
        Delete
    </button>
    </div>
    
)
}

//can't just render this.post, whole object error, need its' values

export default connect (null, {deletePost})(Post)