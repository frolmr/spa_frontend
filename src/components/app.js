import React from 'react';
import axios from 'axios';
import Posts from './posts';
import Post from './post';
import PostForm from './post_form';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    let post = {username: 'vasya', body: '123', title: 'fuck'}
    return (
      <div>
        <Posts posts={this.props.posts} />
        <div className="row">
          <div className="col-md-6">
            <PostForm addPost={this._addPost.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }

  // _addPost(username, title, body) {
  //   const post = {
  //     username,
  //     title,
  //     body
  //   };
  //   this.setState({
  //     posts: this.state.posts.concat([post])
  //   });
  //   this._postPost(post)
  // }
}
PostForm.contextTypes = {
  store: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(App)
