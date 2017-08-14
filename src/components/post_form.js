import React from 'react';
import store from '../store/store'
import { createPost } from '../actions/PostActions';
import { connect } from 'react-redux'

class PostForm extends React.Component {

  validateForm = () => {
    if (this._username.value.trim().length == 0 || this._title.value.trim().length == 0 || this._body.value.trim().length == 0) {
      document.getElementById('submitButton').setAttribute('disabled', 'disabled')
    } else {
      document.getElementById('submitButton').removeAttribute('disabled')
    }
  }

  componentDidMount() {
    this.validateForm();
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
      <h3>{this.props.params}</h3>
        <div className="form-group">
          <label>Name:</label>
          <input className="form-control" onChange={this.validateForm} ref={(input) => this._username = input}/>
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input className="form-control" onChange={this.validateForm} ref={(input) => this._title = input}/>
        </div>
        <div className="form-group">
          <label>Body:</label>
          <textarea className="form-control" onChange={this.validateForm} ref={(textarea) => this._body = textarea}/>
        </div>
        <button id='submitButton' type="submit" className={'btn btn-primary'} >Submit</button>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();

    let post = {
      username: this._username.value,
      title: this._title.value,
      body: this._body.value
    }

    const key = this.props.user.key

    store.dispatch(createPost(post, key))

    this._username.value = this._title.value = this._body.value = ''
    this.validateForm()
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(PostForm)
