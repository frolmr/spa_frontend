import React from 'react';
import Post from './post';

export default class Posts extends React.Component {
  render() {
    const posts = this._getPosts();
    return (
      <div className="posts">
        {posts}
      </div>
    );
  }
  _getPosts() {
    return this.props.posts.map((post) => {
      return (<Post username={post.username} title={post.title} body={post.body} key={post.id} id={post.id}/>);
    });
  }
}
