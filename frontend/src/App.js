import logo from './logo.svg';
import './App.css';
import React from 'react'
import {connect} from 'react-redux'
import { fetchPosts } from './actions/fetchPosts';

class App extends React.Component {
  
  
  // componentDidMount() {
  //   fetch('http://localhost:3001/posts', {method: 'GET'})
  //   .then(response => response.json())
  //   .then(data => console.log(data))

  // }
  //testing out backend/frontend connection

  componentDidMount(){
    this.props.fetchPosts()
  }
  render () {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

}

export default connect(null, {fetchPosts})(App);

//first arg null, reserved for mapStateToProps, but we are not accessing store here
//putting fetch posts directly as second arg, could also mapDispatchToProps there
//point is to be able to call this.props.fetchPosts when component mounts in order to fetch our data
//connect is letting us do that, but it wants to dispatch right away, before our data is retrieved from backend
//that's why we use thunk, it allows us to be async, we can call dispatch in fetchPosts action when the data is ready
