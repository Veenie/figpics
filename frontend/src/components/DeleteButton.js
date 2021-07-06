import React from 'react';
import { deletePost } from '../actions/deletePost'
import {connect} from 'react-redux'
const DeleteButton = (props) => {
   
    const handleDelete = (postId) => {
        // debugger
        props.deletePost(postId)
    }
    
    return <div>
      <br/>
      <button onClick={() => handleDelete(props.postId)}>Delete</button>
      </div>;
    }
  


export default connect (null, {deletePost})(DeleteButton);