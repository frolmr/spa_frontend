import React from 'react';
import Posts from './posts';
import PostForm from './post_form';

export default class App extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <Posts />
        </div>
        <div className="col-md-6">
          <PostForm />
        </div>
      </div>
    );
  }
}
