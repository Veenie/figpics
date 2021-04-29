import React from 'react';

class Home extends React.Component {
  render() {
    return <div>
      <br/>
      <h1>Welcome to One-Liners!</h1>
      <h2>The site where you can add your favorite one liners to the collection!</h2>
      <br/>
      <h3>First time here? Learn more on the about page!</h3>
      <h3>If you are ready to get started, check out the one liner section!</h3>
      <h3>Can't think of one? Check out the links section for helpful resources!</h3>
      
      </div>
  }
}

export default Home; 

//functional components for displaying posts
//pass props as an argument since not a class, so will not use 'this.props'
//does not require render, just a return
//functional components are basically just functions (generally, home is a good example of a simple one)