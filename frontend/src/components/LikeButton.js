import React from 'react';

class LikeButton extends React.Component {
  
state = {
    likes: 0
}

addLike = () => {
    this.setState({
        likes: this.state.likes + 1})
}
  
    render() {
    return <div>
      <br/>
<button type='LikeButton' onClick={this.addLike}>Like: {this.state.likes}</button>
      </div>;
  }
}

export default LikeButton;