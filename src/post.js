import React from 'react';
import PropTypes from 'prop-types';

export default class Post extends React.Component {
  render() {
    return (
       <li>
         <h4>{this.props.name}</h4>
         <p>{this.props.description}</p>
       </li>
      );
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};