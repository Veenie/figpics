import React from 'react'
import {connect} from 'react-redux'
import { deletePost } from '../actions/deletePost'



class PostList extends React.Component{
    //console.log(props)



    handleDelete = (postId) => {
        // debugger
        this.props.deletePost(postId)

    }


    render()   { 
        
    return(

    <div>  {this.props.posts.map(post => 
    <div key={post.id}>
    <h3> {post.text} </h3>
    <footer>- {post.name}</footer>
    <button onClick={() => this.handleDelete(post.id)}>Delete</button>
    </div>)}
     <br/>
    </div>
    )
}

}
export default connect (null, {deletePost})(PostList)

