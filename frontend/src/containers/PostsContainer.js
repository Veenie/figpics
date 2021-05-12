import React from 'react'
import PostList from '../components/PostList'
import PostInput from '../components/PostInput'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/fetchPosts'


// when importing, double period to get from different folder, also getting the names right



class PostsContainer extends React.Component {

    componentDidMount() {
        
        this.props.fetchPosts()
    }

    //componentDidMount is also only called once, but immediately after the first render() method has taken place
    //can only be called because this is a class component, it has access to lifecycle methods, functional do not (can use hooks instead)
    //method is typically used to perform any DOM manipulation or data-fetching that the component might need
    //in this case we are using it to do our initial fetch of the posts from db

    render () {
        return (
            <div>
                <PostInput/>
                <PostList posts={this.props.posts}/>
                {/* {console.log(this.props.posts)} */}
            </div>
        )
    }
}

//render method required, it's a class
//render must return an element (valid jsx)
//using this container to display components PostInput and PostList
//passing posts from global state as a prop thanks to mapStateToProps
//so global state is passed as prop to PostList component




// const mapStateToProps = globalState => {
//     return {
//         posts: globalState.posts
//     }
// }

//in mapStateToProps() we specify exactly which slice of the state we want to provide to our component
//executed with each change to store's state
//we want children of this container to access the current state of 'posts' in the global store 
//allows us to set a prop called posts that is equal to the posts in global store, passed to post list in its prop above

export default connect(state => ({posts: state.posts}), {fetchPosts})(PostsContainer)

//connect() function allows us to specify which data we are listening to (through mapStateToProps), and which component we are providing the data
//first arg is reserved for mapstatetoprops, allows access to global state as seen above 
//second arg is dispatch, allows changes to be made to global state by dispatching actions (which is then sent to reducer to update global state)
//putting fetch posts directly as second arg, could also write a mapDispatchToProps
//this is destructuring, an es6 alternative to writing out a mapDispatchToProps function
//when there's no second arg, you are provided the ability to use disptch prop by connect
//point is to be able to call this.props.fetchPosts when component mounts in order to fetch our data
//connect is letting us do that, but it wants to dispatch right away, before our data is retrieved from backend
//that's why we use thunk, it allows us to be async, we can call dispatch in fetchPosts action when the data is ready