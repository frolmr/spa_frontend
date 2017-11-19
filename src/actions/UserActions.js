import userApi from '../api/userApi'
import { flattenMessages } from '../utils'
import { changeLocale } from './IntlActions'
import msgs from '../messages'

export const loginUser = (user) => {
  return function(dispatch) {
    return userApi.fetchUser(user).then(key => {
      dispatch(loginUserSuccess(key));
      userApi.getUserLocale(key).then(locale => {
        dispatch(changeLocale(locale, flattenMessages(msgs[locale])))
      })
    }).catch(error => {
      throw(error);
    });
  }
}

export const updateUser = (key, user) => {
  return function(dispatch) {
    return userApi.updateUser(key, user).then(user => {
      dispatch(updateUserSuccess(user));
    }).catch(error => {
      throw(error);
    });
  }
}

export const loginUserSuccess = (user) => {
  return {type: 'LOGIN_USER_SUCCESS', user}
}

export const updateUserSuccess = (user) => {
  return {type: 'UPDATE_USER_SUCCESS', user}
}
