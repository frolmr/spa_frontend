import React from 'react';
import PropTypes from 'prop-types';
import store from '../store/store'
import { removePost } from '../actions/PostActions';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {
  render() {
    return (
      <dl>
        <dt>{this.props.title}</dt>
        <dd>{this.props.body}</dd>
        <p>User: {this.props.username}</p>
        <Link to={`/post/${this.props.id}`} role="button" className="btn btn-info">Show post</Link>
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
