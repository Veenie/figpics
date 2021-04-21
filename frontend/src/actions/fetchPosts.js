export function fetchPosts() {
    return (dispatch) => {
    fetch('http://localhost:3001/posts', {method: 'GET'})
    .then(response => response.json())
    .then(posts => dispatch({
        type: 'FETCH_POSTS',
        payload: posts
    }))
}
}

//action creator makes action objects to dispatch to reducer, objects used as criteria for changing global state
//using thunk, dispatch used as the argument of anon function, now dispatch occurs after post data returns
//type required in dispatch, post data is the payload, for reducer