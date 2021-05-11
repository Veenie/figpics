import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '24px',
  margin: '0 6px 10px',
  background: 'red',
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
        >One Liners</NavLink>
                <NavLink
          to="/search"
          exact
          style={link}
          activeStyle={{
            background: 'black'
          }}
        >Search</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: 'black'
          }}
        >About</NavLink>
        <NavLink
          to="/links"
          exact
          style={link}
          activeStyle={{
            background: 'black'
          }}
        >Links</NavLink>
       
      </div>
    )
  }
}

export default Navbar; 