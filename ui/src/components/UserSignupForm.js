import React, {Component} from 'react'

class UserSignupForm extends Component{
  state = {
    newUserInfo:{}
  }

  handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const updatedNewUserInfo = { ...this.state.newUserInfo }
    updatedNewUserInfo[attributeToChange] = newValue
    this.setState({ newUserInfo: updatedNewUserInfo })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createUser(this.state.newUserInfo)
    this.setState({
      newUserInfo:{}
    })
  }

  render(){
    return(
      <div>
        <h2>Enter your profile information!</h2>

        <form onSubmit={this.handleSubmit} id='signup-form'>
          <div>
            <label htmlFor="userName">Username</label>
            <input name="userName" type="text" onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" type="text" onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" type="text" onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input name="password" type="password" onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="neighborhood">Neighborhood</label>
            <input name="neighborhood" type="text" onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <textarea name="bio" type="text" onChange={this.handleChange} />
          </div>

          <div>
            <input id='login-submit' type='submit' value='Signup'/>
          </div>
        </form>
      </div>
    )
  }
}

export default UserSignupForm
