import React from 'react'

const User = props => {
  return(
    <li>
      <hgroup>
        <h2>{props.user.userName}</h2>
        <h3>{props.user.firstName}</h3>
      </hgroup>
      <p>{props.user.bio}</p>
      <p>{props.user.neighborhood}</p>
    </li>
  )
}

export default User
