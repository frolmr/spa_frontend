const initialState = {
  key: null
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_SUCCESS':
      return Object.assign({}, state, {'key': action.user})
    default:
      return state
  }
}

export default user
