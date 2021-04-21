import React from 'react'



const PostList = (props) => {
    // console.log(props)

    


    return(
        <div>
            {props.posts.map(post => <li>{post.name}: {post.text}</li>
            

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