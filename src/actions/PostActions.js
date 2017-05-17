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

export const loadPostsSuccess = (posts) => {
  return {type: 'LOAD_POSTS_SUCCESS', posts};
}

export const addPost = (post) => {
  return {type: 'ADD_POST', post};
}

export const removePost = () => {
  return { type: "REMOVE_POST" }
}
