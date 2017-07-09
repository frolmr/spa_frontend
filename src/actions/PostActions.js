import postApi from '../api/postApi';

export const loadPosts = () => {
  return function(dispatch) {
    return postApi.getAllPosts().then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).catch(error => {
      throw(error);
    });
  };
}

export const createPost = (post) => {
  return function(dispatch) {
    return postApi.createNewPost(post).then(post => {
      dispatch(addPost(post));
    }).catch(error => {
      throw(error);
    });
  };
}

export const removePost = (post_id) => {
  return function (dispatch) {
    return postApi.deletePost(post_id).then(post_id => {
      dispatch(deletePost(post_id));
    }).catch(error => {
      throw(error);
    });
  }
}

export const loadPost = (post_id) => {
  return function (dispatch) {
    return postApi.getPost(post_id).then(post => {
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
