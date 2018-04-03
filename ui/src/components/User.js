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
      {
        props.adminUser ?
        <button onClick={() => props.deleteUser(props.user.id, props.index)}>
          Delete User
        </button>
        : ""
      }
    </li>
  )
}

export default User
