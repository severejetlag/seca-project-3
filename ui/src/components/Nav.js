import React from 'react'
import {Link} from 'react-router-dom';

const Nav = props => {
  return(
    <nav>
      <Link to='/'>Login</Link>
      <Link to='/signup'>Signup</Link>
      <Link to='/userslist'>Users</Link>

    </nav>
  )
}

export default Nav
