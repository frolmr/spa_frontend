import React from 'react';
import Post from './post';
import { connect } from 'react-redux';
import store from '../store/store'
import { loadPosts } from '../actions/PostActions';

class Posts extends React.Component {
  componentDidMount() {
    const key = this.props.user.key
    store.dispatch(loadPosts(key))
  }

  render() {
    const posts = this._getPosts();
    const emptyMessage = (<p>There are no posts.</p>);
    return (
      <div className="container posts">
        {posts.length === 0 ? emptyMessage : posts}
      </div>
    );
  }
  _getPosts() {
    return this.props.posts.map((post) => {
      return (<Post username={post.username} title={post.title} body={post.body} key={post.id} id={post.id}/>);
    });
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    user: state.user
  }
}

export default connect(mapStateToProps)(Posts)
