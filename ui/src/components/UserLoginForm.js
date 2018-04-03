import React, { Component } from 'react'

class UserLoginForm extends Component {
  state = {
    userInfo: {}
  }

  handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const updatedUserInfo = { ...this.state.userInfo }
    updatedUserInfo[attributeToChange] = newValue
    this.setState({ userInfo: updatedUserInfo })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.userLogin(this.state.userInfo)
    this.setState({userInfo:{}})
  }

  render() {
    return (
      <div>
        <h2>Create New Idea</h2>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">Username</label>
            <input
              name="userName"
              type="text"
              onChange={this.handleChange} />
            </div>

            {/* <div>
              <label htmlFor="password">password</label>
              <textarea
                name="password"
                onChange={this.handleChange} />
              </div> */}

              <div>
                <input type="submit" value="Login"/>
              </div>
            </form>

          </div>
        )
      }
    }

    export default UserLoginForm
