import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import axios from 'axios'
import UsersPage from './components/UsersPage'

class App extends Component {
  state = {
    currentUser: {}
  }

  userLogin = async (userInfo) => {
    try {
        const userLoginResponse = await axios.get(`/users/search?userName=${userInfo.userName}`)
        this.setState({ currentUser: userLoginResponse.data })
    } catch(error) {
        console.log('Error logging in!')
        console.log(error)
    }
  }
  render() {
    const HomeComponent = () => (<Home currentUser={this.state.currentUser} userLogin={this.userLogin}/>)
    const UsersPageCompoment = () => (<UsersPage currentUser={this.state.currentUser}/>)
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={HomeComponent}/>
          <Route exact path='/users' render={UsersPageCompoment}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
