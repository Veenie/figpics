import React from 'react'
import PostList from '../components/PostList'
import PostInput from '../components/PostInput'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/fetchPosts'



class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }
    render () {
        return (
            <div>
                <PostList posts={this.props.posts}/>
                <PostInput />
            </div>
        )
    }
}

//render method required, it's a class
// when importing, double period to get from different folder, also getting the names right

const mapStateToProps = globalState => {
    return {
        posts: globalState.posts
    }
}

//this allows children of this container to access the current state of the global store (allows us to use this.props.posts)

export default connect(mapStateToProps, {fetchPosts})(PostsContainer)

//above used to connect to global store, first arg allows access to current global state 
//second is dispatch, allows changes to be made in children by dispatching actions (which is then sent to reducer to update global state)