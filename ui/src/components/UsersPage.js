import React, {Component} from 'react'
import UserList from './UserList'
import axios from 'axios'

class UsersPage extends Component{
  state = {
    users: []
  }

  async componentDidMount() {
      try {
          const response = await axios.get('/users')
          this.setState({ users: response.data })
      } catch (error) {
          console.log('Error retrieving ideas!')
      }
  }

  render(){
    return(
      <div>
        <hgroup>
          <h1>Registered Users</h1>
        </hgroup>
        <UserList users={this.state.users}/>
      </div>
    )
  }
}

export default UsersPage;
