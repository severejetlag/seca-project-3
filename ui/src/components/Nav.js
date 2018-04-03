import React from 'react'
import {Link} from 'react-router-dom';

const Nav = props => {
  return(
    <nav>
      <Link to='/'>Login</Link>
      <Link to='/signup'>Signup</Link>
      <Link to='/users'>Users</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/search'></Link>
    </nav>
  )
}

export default Nav
