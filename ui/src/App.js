import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import axios from 'axios'
import UsersPage from './components/UsersPage'
import Signup from './components/Signup'
import ProfilePage from './components/ProfilePage'

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
    try{
      const createdUserResponse = await axios.post('/users', newUserInfo)
      this.setState({currentUser: createdUserResponse})
    }catch(error){
      console.log('Error creating new user')
      console.log(error)
    }
  }

  updateUser = async (userInfo) =>{
    try{
      const updatedUserResponse = await axios.put(`/users/${userInfo.id}`.userInfo)
      this.setState({currentUser: updatedUserResponse})
    }catch(error){
      console.log('Error updating account information')
      console.log(error)
    }
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

    const ProfilePageComponent = () => (
      <ProfilePage
        currentUser={this.state.currentUser}
        updateUser={this.updateUser}
      />
    )

    return (
      <Router>
        <Switch>
          <Route exact path='/' render={LoginComponent}/>
          <Route exact path='/signup' render={SignupComponent}/>
          <Route exact path='/userslist' render={UsersPageCompoment}/>
          <Route exact path='/profile' render={ProfilePageComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
