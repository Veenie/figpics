export const addPost = (data) => {
//debugger
    return (dispatch) => {

    fetch('http://localhost:3001/posts', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(data)
        })
    .then(response => response.json())
    .then(post => dispatch({
        type: 'ADD_POST',
        payload: post
    }))




}

}

//data represents our form data's state that was sent on submit
//can call dispatch function as arg here thanks to thunk
//very similar to fetch, but post rather than get http verb
//fetch request will persist to backend but without dispatch, user does not see this without refreshing and triggering new get with componentdidmount
//need to update the store so frontend can reflect change, so that's why we dispatch to reducer so front end updates as well