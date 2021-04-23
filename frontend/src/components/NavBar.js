import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
          <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'black'
          }}
        >Home</NavLink>
         <NavLink
          to="/posts/"
          exact
          style={link}
          activeStyle={{
            background: 'black'
          }}
        >All Posts</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: 'black'
          }}
        >About</NavLink>
       
      </div>
    )
  }
}

export default Navbar; 