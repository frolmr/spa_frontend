import React from 'react';
import axios from 'axios';
import Post from './post';
import PostForm from './post_form';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  render() {
    const news = this._getNews();
    return (
      <div>
        {news}
        <div className="row">
          <div className="col-md-6">
            <PostForm addPost={this._addPost.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }

  componentWillMount() {
    this._fetchNews();
  }

  _getNews() {
    return this.state.posts.map((post) => {
      return (<Post username={post.username} title={post.title} body={post.body} key={post.id}/>);
    });
  }

  _fetchNews() {
    axios.get('http://localhost:3000/api/posts').then(res => {
      const posts = res.data;
      this.setState({posts});
    });
  }

  _addPost(username, title, body) {
    const post = {
      username,
      title,
      body
    };
    this.setState({
      posts: this.state.posts.concat([post])
    });
    this._postPost(post)
  }

  _postPost(post) {
    axios.post('http://localhost:3000/api/posts', {
      "post": {
        "username": post.username,
        "title": post.title,
        "body": post.body
      }
    });
  }
}
