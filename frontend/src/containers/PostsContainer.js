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
//passing posts from global state as a prop thanks to mapStateToProps



const mapStateToProps = globalState => {
    return {
        posts: globalState.posts
    }
}

//this allows children of this container to access the current state of the global store 
//allows us to set a prop called posts that is equal to the posts in global store, passed to post list in its prop above

export default connect(mapStateToProps, {fetchPosts})(PostsContainer)

//connect is wiring component to global store
//above used to connect to global store, first arg is reserved for mapstatetoprops, allows access to current global state 
//second is dispatch, allows changes to be made in children by dispatching actions (which is then sent to reducer to update global state)
//putting fetch posts directly as second arg, could also write a mapDispatchToProps
//point is to be able to call this.props.fetchPosts when component mounts in order to fetch our data
//connect is letting us do that, but it wants to dispatch right away, before our data is retrieved from backend
//that's why we use thunk, it allows us to be async, we can call dispatch in fetchPosts action when the data is ready