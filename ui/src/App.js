import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import axios from 'axios'
import UsersPage from './components/UsersPage'
import Signup from './components/Signup'

class App extends Component {
  state = {
    currentUser: {},
    adminUser: false
  }

  userLogin = async (userInfo, isAdmin) => {
    try {
        const userLoginResponse = await axios.get(`/users/search?userName=${userInfo.userName}`)
        this.setState({ currentUser: userLoginResponse.data, adminUser: isAdmin })
    } catch(error) {
        console.log('Error logging in!')
        console.log(error)
    }
  }

  createUser = async (newUserInfo) =>{

  }

  toggleAdminLogin = (isAdmin) => {
    this.setState({adminUser: isAdmin})
  }

  render() {
    const LoginComponent = () => (
      <Login
        currentUser={this.state.currentUser}
        userLogin={this.userLogin}
        toggleAdminLogin={this.toggleAdminLogin}
      />)

    const SignupComponent = () => (
      <Signup
        currentUser={this.state.currentUser}
        createUser={this.createUser}
      />)

    const UsersPageCompoment = () => (
      <UsersPage
        currentUser={this.state.currentUser}
        adminUser={this.state.adminUser}
      />)
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={LoginComponent}/>
          <Route exact paht='/signup' render={SignupComponent}/>
          <Route exact path='/users' render={UsersPageCompoment}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
