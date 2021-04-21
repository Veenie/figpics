import React from 'react'



const PostList = (props) => {
    // console.log(props)

    


    return(
        <div>
            {props.posts.map(post => post.name
            

                // <img src='https://ibb.co/fqjm8Nx' alt='logl' key={post.id}/>
                )}

        </div>
    )
}

export default PostList

//functional components for displaying posts
//pass props as an argument since not a class
//does not require render, just a return
//functional components are basically just functions