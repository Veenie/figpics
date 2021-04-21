import React from 'react'

const Post = (props) => {
//console.log(props)
return (
    <div>
        {props.post.text} -{props.post.name}
    </div>
)
}

//can't just render this.post, whole object error, need its' values

export default Post