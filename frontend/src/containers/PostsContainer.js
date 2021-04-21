import React from 'react'
import PostList from '../components/PostList'
import PostInput from '../components/PostInput'

export default class PostsContainer extends React.Component {
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
//