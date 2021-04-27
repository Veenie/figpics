export const deletePost = (postId) => {
    //debugger
    return (dispatch) => {
    return fetch(`http://localhost:3001/posts/${postId}`, {method: 'DELETE'})
    .then(response => response.json())
    .then(post => dispatch({
        type: 'DELETE_POST',
        payload: post
    }))
}
}

//need to use backticks in fetch in order to string interpolate the postId