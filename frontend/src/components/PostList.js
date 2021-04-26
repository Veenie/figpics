import React from 'react'



const PostList = (props) => {
    //console.log(props)

    


    return(

    <div>  {props.posts.map(post => 
    <div key={post.id}>
    <h3> {post.text} </h3>
    <footer>- {post.name}</footer>
    </div>)}
<br/>
        </div>
    )
}

export default PostList

//functional components for displaying posts
//pass props as an argument since not a class
//does not require render, just a return
//functional components are basically just functions