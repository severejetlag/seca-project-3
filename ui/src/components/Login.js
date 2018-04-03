import React, {Component} from 'react'
import Nav from './Nav'
import UserLoginForm from './UserLoginForm'
import {Redirect} from 'react-router-dom'

class Login extends Component{
  render(){
    const hasCurrentUser = Object.keys(this.props.currentUser).length !== 0

    // Redirect from Stack Overflow
    //https://stackoverflow.com/questions/43230194/how-to-use-redirect-in-the-new-react-router-dom-of-reactjs
    if(hasCurrentUser){
      return <Redirect to='/userslist'/>
    }
    return(
      <div>
        <Nav/>
        <UserLoginForm userLogin={this.props.userLogin} toggleAdminLogin={this.props.toggleAdminLogin}/>
      </div>
    )
  }
}

export default Login
