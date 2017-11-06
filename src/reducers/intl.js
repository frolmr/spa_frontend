import initialState from './initialState'

const intl = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LOCALE':
      return Object.assign({},
        state,
        {
          'locale': action.locale,
          'messages': action.messages
        })
    default:
      return state
  }
}

export default intl
