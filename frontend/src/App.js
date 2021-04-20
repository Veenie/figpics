import logo from './logo.svg';
import './App.css';
import React from 'react'
import {connect} from 'react-redux'
import { fetchPosts } from './actions/postAction';

class App extends React.Component {
  
  
  // componentDidMount() {
  //   fetch('http://localhost:3001/posts', {method: 'GET'})
  //   .then(response => response.json())
  //   .then(data => console.log(data))

  // }
  //testing out backend/frontend connection
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

//putting fetch posts directly as second arg, could also mapDispatchToProps there
