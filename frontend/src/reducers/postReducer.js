export default function postReducer(state = {posts: []}, action) {
    //debugger
    switch (action.type) {

        case 'FETCH_POSTS':
            return {posts: action.payload}
        case 'ADD_POST':
            return {...state, posts: [...state.posts, action.payload] }    
        default:
            return state
    }
    

}

//state initially set as object with posts key pointing to empty array
//set default in switcher to return state so something is always returned
//in fetch posts, new state is set to the payload from fetch (payload is the json response) rather than empty array
//in add_post, using spread operator to say our posts array includes all previous data, plus newly added post