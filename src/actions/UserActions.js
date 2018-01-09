import userApi from '../api/userApi'
import { changeLocale } from './IntlActions'
import msgs from '../msgs'

export const loginUser = (user) => {
  return function(dispatch) {
    return userApi.fetchUser(user).then(key => {
      dispatch(loginUserSuccess(key));
      userApi.getUserLocale(key).then(locale => {
        dispatch(changeLocale(locale, msgs[locale]))
      })
    }).catch(error => {
      throw(error);
    });
  }
}

export const updateUser = (key, locale) => {
  return function(dispatch) {
    return userApi.updateUserLocale(key, locale).then(response => {
      dispatch(changeLocale(response.locale, msgs[response.locale]))
    }).catch(error => {
      throw(error);
    });
  }
}

export const loginUserSuccess = (user) => {
  return {type: 'LOGIN_USER_SUCCESS', user}
}
