export default function postReducer(state = {posts: []}, action) {
    // debugger
    switch (action.type) {

        case 'FETCH_POSTS':
            return {posts: action.payload}
        case 'ADD_POST':
            return { posts: [...state.posts, action.payload] }
        case 'DELETE_POST':
            return { posts: state.posts.filter(post => post.id !== action.payload.id)}
        default:
            return state
    }
    

}
//reducers are functions that recieve the previous state and action from dispatch
//dispatch is how we crud by changing global state
//reduce into a new state to replace the old, do not mutate directly (like making a copy and revising it)
//state initially set as object with posts key pointing to empty array
//set default in switcher to return state so something is always returned
//in fetch posts, new state is set to the payload from fetch (payload is the json response) rather than empty array
//in add_post, using spread operator to say our posts array includes all previous data, plus newly added post
//in delete_post, we use filter and strict inequality to return everything that does NOT match id in the payload