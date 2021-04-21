import React from 'react'
import Post from './Post'


const PostList = (props) => {
    // console.log(props)

    


    return(
        <div>
            {props.posts.map(post => <p key={post.id}><Post post={post}/></p>
            

                )}
<br/>
        </div>
    )
}

export default PostList

//functional components for displaying posts
//pass props as an argument since not a class
//does not require render, just a return
//functional components are basically just functions