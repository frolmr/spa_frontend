import React from 'react';
import PropTypes from 'prop-types';

export default class Post extends React.Component {
  render() {
    return (
      <dl>
        <dt>{this.props.title}</dt>
        <dd>{this.props.body}</dd>
        <p>User: {this.props.username}</p>
      </dl>
    );
  }
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  title: PropTypes.string,
  body: PropTypes.string
};
