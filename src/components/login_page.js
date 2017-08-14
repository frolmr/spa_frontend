import React from 'react';
import store from '../store/store'
import { loginUser } from '../actions/UserActions'

export default class LoginPage extends React.Component {
  validateForm = () => {
    if (this._email.value.trim().length == 0 || this._password.value.trim().length == 0) {
      document.getElementById('submitButton').setAttribute('disabled', 'disabled')
    } else {
      document.getElementById('submitButton').removeAttribute('disabled')
    }
  }

  componentDidMount() {
    this.validateForm();
  }

  render () {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" onChange={this.validateForm} ref={(input) => this._email = input}/>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" onChange={this.validateForm} ref={(input) => this._password = input}/>
        </div>
        <button id="submitButton" type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }

  _handleSubmit(event) {
    event.preventDefault();

    let user = {
      email: this._email.value,
      password: this._password.value
    }

    store.dispatch(loginUser(user))
  }
}
