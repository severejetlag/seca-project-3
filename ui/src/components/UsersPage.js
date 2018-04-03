import React, {Component} from 'react'
import UserList from './UserList'
import axios from 'axios'
import Nav from './Nav'

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

  deletePost = async (userId, index) => {
    try {
        await axios.delete(`/users/${userId}`)

        const updatedUserList = [...this.state.users]
        updatedUserList.splice(index, 1)
        this.setState({users: updatedUserList})

    } catch (error) {
        console.log(`Error deleting Idea with ID of ${postId}`)
        console.log(error)
    }
  }

  render(){
    return(
      <div>
        <Nav/>
        <hgroup>
          <h1>Registered Users</h1>
        </hgroup>
        <UserList users={this.state.users} adminUser={this.props.adminUser}/>
      </div>
    )
  }
}

export default UsersPage;
