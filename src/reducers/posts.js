import initialState from './initialState';

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_POSTS_SUCCESS':
      return Object.assign([], state, action.posts )
    case "ADD_POST_SUCCESS":
      return [ ...state, action.post ]
    case "DELETE_POST_SUCCESS":
        return state.filter(({ id }) => id !== action.post_id);
    default:
      return state
  }
}

export default posts
