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

let enhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//for our dev tools and middleware

let store = createStore(postReducer, enhancer(applyMiddleware(thunk)))

//create store returns our store object (global state)
//we want to pass this down through our app so it's available throughout
//reducer function required, using optional enhancer argument here to enable thunk middleware



ReactDOM.render(
  <Provider store={store} >
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

//Provider gives us the ability to pass our store down to App and it's children
//we will need to use connect in the components themselves to be able to do this
//wrap App in router so we can set url paths



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
