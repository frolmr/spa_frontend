import initialState from './initialState';

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_POSTS_SUCCESS':
      return Object.assign([], state, action.posts )
    case "ADD_POST":
      return [ ...state, action.post ]
    default:
      return state
  }
}

export default posts
