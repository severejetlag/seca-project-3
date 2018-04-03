import React from 'react'
import {Link} from 'react-router-dom';

const Nav = props => {
  return(
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/users'></Link>
      <Link to='/search'></Link>
    </nav>
  )
}

export default Nav
