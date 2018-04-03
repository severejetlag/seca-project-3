import React, {Component} from 'react'
import Nav from './Nav'
import UserLoginForm from './UserLoginForm'

class Home extends Component{

  render(){
    return(
      <div>
        <Nav/>
        <UserLoginForm userLogin={this.props.userLogin}/> 
      </div>
    )
  }
}

export default Home
