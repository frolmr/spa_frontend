import initialState from './initialState'

const pages = (state = initialState, action) => {
  switch (action.type) {
    case 'PAGINATE_PAGE':
      return Object.assign({}, state, action.pages )
    default:
      return state
  }
}

export default pages
