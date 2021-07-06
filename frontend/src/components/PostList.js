import React from 'react'

import DeleteButton from './DeleteButton'
import LikeButton from './LikeButton'


const PostList = (props) => {
    //console.log(props)


     
        
    return(
    <div>  {props.posts.map(post => 
    <div key={post.id}>
    <h3> {post.text} </h3>
    <footer>- {post.name}</footer>
    <DeleteButton postId={post.id} />
    <LikeButton />
    </div>)}
     <br/>
    </div>
    )
}

export default PostList

