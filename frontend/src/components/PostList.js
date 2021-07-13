import React from 'react'

import DeleteButton from './DeleteButton'



const PostList = (props) => {
    //console.log(props)


     
        
    return(
    <div>  {props.posts.map(post => 
    <div key={post.id}>
    <h3> {post.text} </h3>
    <footer>- {post.name}</footer>
    <DeleteButton postId={post.id} />

    </div>)}
     <br/>
    </div>
    )
}

export default PostList

