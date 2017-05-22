import React from 'react';
import Posts from './posts';
import Post from './post';
import PostForm from './post_form';
import { connect } from 'react-redux';
import store from '../store/store'
import {loadPosts, createPost, removePost} from '../actions/PostActions';

class App extends React.Component {

  componentDidMount() {
    store.dispatch(loadPosts())
  }

  render() {
    return (
      <div>
        <Posts posts={this.props.posts} />
        <div className="row">
          <div className="col-md-6">
            <PostForm />
          </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(App)
