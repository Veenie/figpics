import React from 'react'
import PostList from '../components/PostList'
import PostInput from '../components/PostInput'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/fetchPosts'
import {Route} from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Navbar from '../components/NavBar'


class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }
    render () {
        return (
            <div>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path='/posts/new' component={PostInput}/>
                <Route exact path='/posts' render={ () => <PostList posts={this.props.posts}/> } />  
            </div>
        )
    }
}

//render method required, it's a class
// when importing, double period to get from different folder, also getting the names right
//putting our routes here because this is where access to store is given
//using render on second route because we are passing props (just put previous code inside of it)
//need to use exact path, or else there's confusion with both having 'posts'
//read on exact path and nested routes

const mapStateToProps = globalState => {
    return {
        posts: globalState.posts
    }
}

//this allows children of this container to access the current state of the global store (allows us to use this.props.posts)

export default connect(mapStateToProps, {fetchPosts})(PostsContainer)

//above used to connect to global store, first arg allows access to current global state 
//second is dispatch, allows changes to be made in children by dispatching actions (which is then sent to reducer to update global state)