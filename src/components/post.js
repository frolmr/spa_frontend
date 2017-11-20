import React from 'react';
import PropTypes from 'prop-types';
import store from '../store/store'
import { removePost } from '../actions/PostActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

class Post extends React.Component {
  render() {
    const key = this.props.user.key
    let image = this._getImage()
    return (
      <dl>
        <dt>{this.props.title}</dt>
        <dd>{this.props.body}</dd>
        <p>
          <FormattedMessage id="postPage.user" />: {this.props.username}</p>
        { this.props.image ? image : null }
        <Link to={`/post/${this.props.id}`} role="button" className="btn btn-info">
          <FormattedMessage id="postButtons.show" />
        </Link>
        <button onClick={() => {store.dispatch(removePost(this.props.id, key))}} className="btn btn-danger">
          <FormattedMessage id="postButtons.del" />
        </button>
      </dl>
    );
  }

  _getImage() {
    return (
      <div>
        <img src={process.env.REMOTE_HOST + this.props.image} />
      </div>
    )
  }
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  title: PropTypes.string,
  body: PropTypes.string
};

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Post)
