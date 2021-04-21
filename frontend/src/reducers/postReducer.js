export default function postReducer(state = {posts: []}, action) {
    debugger
    switch (action.type) {

        case 'FETCH_POSTS':
            return state


        default:
            return state
    }
    

}

//state initially set as object with posts key pointing to empty array
//set default in switcher to return state so something is always returned