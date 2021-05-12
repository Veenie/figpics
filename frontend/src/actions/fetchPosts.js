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

//to change store, use dispatch, function that's part of redux store object
//accepts action object as arg, dispatch will invoke reducer and pass 2 arguments: current state and action (what state was & how to change it)
//only way to change global state (CRUD)

//action creator makes action objects (normal js objects) to use as arguments for dispatch to reducer
//actions must have a type, so reducer can know what to do, types used as criteria for changing global state
//second optional property holds the data we want incorporated in global state

//fetch returns a promise for the data, once it actually resolves, .then chained on are instructions on what to do with it

//when we pass action creators to connect function, return value passed as arg to dispatch
//but fetch does not return plain js object, instead is a promise
//problem: we need our payload data to properly continue and pass info correctly
//in js, fetch is async, means the work of retrieving from backend will not halt anything else, it will run in parallel
//we want to wait for data, dispatch ourselves

//thunk middleware provides third party extension point between dispatching and moment it reaches reducer
//Thunk allows us to return a function inside of our action creator
//That function receives the store's dispatch function as its argument
//we now get is the ability to dispatch actions from inside of the returned function
//using thunk, dispatch used as the argument of anon function, now dispatch occurs within function after post data returns

//type required in actions, post data is the payload, for reducer
//goal here is to fetch from the backend and pass the data to front end and store it