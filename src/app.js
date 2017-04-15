import React from 'react';
import Post from './post';
import PostForm from './post_form';

export default class App extends React.Component {
  render() {
    const news = this._getNews();
    return(
      <div>
        <ul>{news}</ul>
        <PostForm />
      </div>
      );
  }

  _getNews() {
    const newsList = [
      { id: 1, name: 'lightning', description: 'Grass is green' },
      { id: 2, name: 'recent', description: 'Sky is blue' },
      { id: 3, name: 'last one', description: 'Earth is round' }
    ];
    return newsList.map((post) => {
      return (
        <Post name={post.name} description={post.description} key={post.id} />
        );
    });
  }
}