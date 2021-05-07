import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import postReducer from './reducers/postReducer'
import {BrowserRouter as Router} from 'react-router-dom'

//we import content from packages we want to use
//we also import from components we've written in order to use them here (in this case, App)


let enhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//for our dev tools and middleware

let store = createStore(postReducer, enhancer(applyMiddleware(thunk)))

//create store function returns instance of redux store object (global state)
//we want to pass this down through our app so it's available throughout
//reducer function required, using optional enhancer argument here to enable thunk middleware
//need compose to pass more than one thing into second arg of createStore


ReactDOM.render(
  <Provider store={store} >
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

//index.js file is where ReactDOM renders our application
//To avoid passing store as a prop, we use the Provider component, imported from react-redux. 
//The Provider component wraps the top level component (App) and is the only component where store is passed in
//will be able to access our store and/or dispatch actions from any component we want, regardless of where it is on component tree.
//we will need to use 'connect' function in a component's export statement to be able to map and dispatch w/ store data
//wrap App in router so we can set url paths



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
