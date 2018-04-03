import React, {Component} from 'react'

class Signup extends Component{
  state = {
    newUserInfo:{}
  }
  render(){
    const hasCurrentUser = Object.keys(this.props.currentUser).length !== 0

    // Redirect from Stack Overflow
    //https://stackoverflow.com/questions/43230194/how-to-use-redirect-in-the-new-react-router-dom-of-reactjs
    if(hasCurrentUser){
      return <Redirect to='/users'/>
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
