import React from 'react'

const Post = (props) => {
//console.log(props)
return (
    <li>
        {props.post.text} -{props.post.name}
    </li>
)
}

//can't just render this.post, whole object error, need its' values

export default Post