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

//to be async means the work of retrieving from backend will not halt anything else, it will run in parallel
//fetch returns a promise for the data, once it actually comes in, .then chained on are instructions on what to do with it
//action creator makes action objects to use as arguments in dispatch to reducer, objects used as criteria for changing global state
//using thunk, dispatch used as the argument of anon function, now dispatch occurs after post data returns
//type required in actions, post data is the payload, for reducer
//goal here is to fetch from the backend and pass the data to front end and store it