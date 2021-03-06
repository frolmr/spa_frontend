import postApi from '../api/postApi';

export const loadPosts = (key, page, query, order) => {
  return function(dispatch) {
    return postApi.getAllPosts(key, page, query, order).then(data => {
      dispatch(loadPostsSuccess(data.posts));
      dispatch(pagination(data.pages));
    }).catch(error => {
      throw(error);
    });
  };
}

export const createPost = (post, key) => {
  return function(dispatch) {
    return postApi.createNewPost(post, key).then(post => {
      dispatch(addPost(post));
    }).catch(error => {
      throw(error);
    });
  };
}

export const removePost = (post_id, key) => {
  return function (dispatch) {
    return postApi.deletePost(post_id, key).then(post_id => {
      dispatch(deletePost(post_id));
    }).catch(error => {
      throw(error);
    });
  }
}

export const loadPost = (post_id, key) => {
  return function (dispatch) {
    return postApi.getPost(post_id, key).then(post => {
      dispatch(loadPostSuccess(post));
    }).catch(error => {
      throw(error);
    });
  }
}

export const loadPostsSuccess = (posts) => {
  return {type: 'LOAD_POSTS_SUCCESS', posts};
}

export const addPost = (post) => {
  return {type: 'ADD_POST_SUCCESS', post};
}

export const deletePost = (post_id) => {
  return { type: "DELETE_POST_SUCCESS", post_id }
}

export const loadPostSuccess = (post) => {
  return { type: "LOAD_POST_SUCCESS", post }
}

export const pagination = (pages) => {
  return {type: 'PAGINATE_PAGE', pages}
}
