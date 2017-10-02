import React from 'react';
import Post from './post';
import { connect } from 'react-redux';
import store from '../store/store'
import { loadPosts } from '../actions/PostActions';
import ReactPaginate from 'react-paginate';
import Sort from './sort'

class Posts extends React.Component {
  componentDidMount() {
    const key = this.props.user.key
    store.dispatch(loadPosts(key, 1))
  }

  render() {
    const posts = this._getPosts();
    const emptyMessage = (<p>There are no posts.</p>);
    return (
      <div>
        <div className="container posts">
          <Sort />
          {posts.length === 0 ? emptyMessage : posts}
        </div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          pageCount={this.props.pages.total_pages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
      </div>
    );
  }
  _getPosts() {
    return this.props.posts.map((post) => {
      return (<Post username={post.username} title={post.title} body={post.body} image={post.image.url} key={post.id} id={post.id}/>);
    });
  }
  handlePageClick = (page) => {
    const key = this.props.user.key
    store.dispatch(loadPosts(key, (page.selected + 1)))
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    user: state.user,
    pages: state.pages
  }
}

export default connect(mapStateToProps)(Posts)
