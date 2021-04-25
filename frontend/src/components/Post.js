import React from 'react'

const Post = (props) => {
//console.log(props)
return (
    <div className='post'>
    <h3>
        {props.post.text}
    </h3>
    <footer>- {props.post.name}</footer>
    
    </div>
    
)
}

//can't just render this.post, whole object error, need its' values

export default Post