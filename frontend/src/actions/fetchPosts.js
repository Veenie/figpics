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

//action creator makes action objects to use as arguments in dispatch to reducer, objects used as criteria for changing global state
//in js, fetch is async, means the work of retrieving from backend will not halt anything else, it will run in parallel
//problem if we need our data to properly continue in app
//thunk lets us return a function inside of our action creator
//fetch returns a promise for the data, once it actually comes in, .then chained on are instructions on what to do with it
//using thunk, dispatch used as the argument of anon function, now dispatch occurs after post data returns
//type required in actions, post data is the payload, for reducer
//goal here is to fetch from the backend and pass the data to front end and store it