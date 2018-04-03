import React from 'react'
import User from './User'
const UserList = props => {
  const userComponents = props.users.map((user, index) => {
    return (
      <User
        user={user}
        // deletePost={props.deletePost}
        key={index}
        index={index}
      />
    )
  })
  return(
    <ul>
      {userComponents}
    </ul>
  )
}


export default UserList
