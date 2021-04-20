export function fetchPosts() {
    fetch('http://localhost:3001/posts', {method: 'GET'})
    .then(response => response.json())
    .then(data => console.log(data))
}

//action creator makes action objects to dispatch to reducer, objects used as criteria for changing global state