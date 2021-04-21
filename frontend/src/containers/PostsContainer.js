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
                <PostList />
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

//this allows children to access the current state of the global store

export default connect(mapStateToProps, {fetchPosts})(PostsContainer)