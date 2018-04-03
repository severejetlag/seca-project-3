import React, {Component} from 'react'
import ProfilePageContent from './ProfilePageContent'
import ProfilePageEditForm from './ProfilePageEditForm'
import Nav from './Nav'

class ProfilePage extends Component{
  state = {
    editIsActive: false
  }
  render(){

    return(
      <div>
        <Nav/>
        <h1>Profile Page</h1>
        <ProfilePageContent
          userName={this.props.currentUser.userName}
          firstName={this.props.currentUser.firstName}
          lastName={this.props.currentUser.lastName}
          neighborhood={this.props.currentUser.neighborhood}
          bio={this.props.currentUser.bio}
        />

        <ProfilePageEditForm
          currentUser={this.props.currentUser}
          updateUser={this.props.updateUser}
        />

      </div>
    )
  }
}

export default ProfilePage
