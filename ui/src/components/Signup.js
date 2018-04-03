import React, {Component} from 'react'
import UserSignupForm from './UserSignupForm'
import Nav from './Nav'
import {Redirect} from 'react-router-dom'

class Signup extends Component{
  state = {
    newUserInfo:{}
  }
  render(){
    // Redirect from Stack Overflow
    //https://stackoverflow.com/questions/43230194/how-to-use-redirect-in-the-new-react-router-dom-of-reactjs
    if(this.props.hasCurrentUser){
      return <Redirect to='/userslist'/>
    }
    return(
      <div>
        <Nav/>
        <UserSignupForm createUser={this.props.createUser}/>
      </div>
    )
  }
}

export default Signup
