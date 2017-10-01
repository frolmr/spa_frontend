import React from 'react';
import store from '../store/store'
import { connect } from 'react-redux';
import { loadPost } from '../actions/PostActions';

class PostPage extends React.Component {
  componentDidMount() {
    const { match } = this.props
    const key = this.props.user.key
    store.dispatch(loadPost(match.params.id, key))
  }

  render() {
    const post_object = this.props.post
    return (
      <table className="table">
        <tbody>
          <tr>
            <td>User</td>
            <td>{post_object.username}</td>
          </tr>
          <tr>
            <td>Title</td>
            <td>{post_object.title}</td>
          </tr>
          <tr>
            <td>Body</td>
            <td>{post_object.body}</td>
          </tr>
        </tbody>
        <div className="text-center">
          <img className="rounded" src={process.env.REMOTE_HOST + post_object.image.url} />
        </div>
      </table>
    );
  }
}

function mapStateToProps(state, props) {
  const { match } = props;
  if (match.params.id) {
    return {
      post: state.posts.find(item => item.id == match.params.id),
      user: state.user
    }
  }
}

export default connect(mapStateToProps)(PostPage)
