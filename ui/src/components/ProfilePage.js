import React, {Component} from 'react'
import ProfilePageContent from './ProfilePageContent'
import ProfilePageEditForm from './ProfilePageEditForm'
import Nav from './Nav'
import {Redirect} from 'react-router-dom'


class ProfilePage extends Component{
  state = {
    editIsActive: false
  }

  toggleProfileEdit = (event) => {
    event.preventDefault()
    this.setState({editIsActive: !this.state.editIsActive})
  }
  render(){
    const hasCurrentUser = Object.keys(this.props.currentUser).length === 0

    // Redirect from Stack Overflow
    //https://stackoverflow.com/questions/43230194/how-to-use-redirect-in-the-new-react-router-dom-of-reactjs
    if(hasCurrentUser){
      return <Redirect to='/'/>
    }

    return(
      <div>
        <Nav/>
        <h1>Profile Page</h1>
        <button onClick={this.toggleProfileEdit}>Edit Profile</button>
        {
          this.state.editIsActive ?
          <ProfilePageEditForm
            currentUser={this.props.currentUser}
            updateUser={this.props.updateUser}
          />
          :
          <ProfilePageContent
            userName={this.props.currentUser.userName}
            firstName={this.props.currentUser.firstName}
            lastName={this.props.currentUser.lastName}
            neighborhood={this.props.currentUser.neighborhood}
            bio={this.props.currentUser.bio}
          />
        }
      </div>
    )
  }
}

export default ProfilePage
