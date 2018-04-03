import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import axios from 'axios'


class App extends Component {
  state = {
    currentUser: {}
  }
  async componentDidMount() {
      try {
          const response = await axios.get('/users/1')
          this.setState({ currentUser: response.data })
      } catch (error) {
          console.log('Error retrieving ideas!')
      }
  }
  render() {
    const HomeComponent = () => (<Home currentUser={this.state.currentUser}/>);
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
