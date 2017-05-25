import React from 'react';
import store from '../store/store'
import {loadPosts, createPost, removePost} from '../actions/PostActions';
import { connect } from 'react-redux';

class PostForm extends React.Component {
  state = {
    username: '',
    title: '',
    body: ''
  }

  render() {
    const { store } = this.context
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Name:</label>
          <input className="form-control" ref={(input) => this._username = input}/>
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input className="form-control" ref={(input) => this._title = input}/>
        </div>
        <div className="form-group">
          <label>Body:</label>
          <textarea className="form-control" ref={(textarea) => this._body = textarea}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
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

    store.dispatch(createPost(post))

    this._username.value = ''
    this._title.value = ''
    this._body.value = ''
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostForm)
