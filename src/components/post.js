import React from 'react';
import PropTypes from 'prop-types';
import store from '../store/store'
import {loadPosts, createPost, removePost} from '../actions/PostActions';
import { connect } from 'react-redux';

class Post extends React.Component {
  render() {
    return (
      <dl>
        <dt>{this.props.title}</dt>
        <dd>{this.props.body}</dd>
        <p>User: {this.props.username}</p>
        <button onClick={() => {store.dispatch(removePost(this.props.id))}} className="btn btn-danger">Delete post</button>
      </dl>
    );
  }
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  title: PropTypes.string,
  body: PropTypes.string
};

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Post)
