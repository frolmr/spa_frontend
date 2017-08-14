import userApi from '../api/userApi'

export const loginUser = (user) => {
  return function(dispatch) {
    return userApi.fetchUser(user).then(user => {
      dispatch(loginUserSuccess(user));
    }).catch(error => {
      throw(error);
    });
  }
}

export const loginUserSuccess = (user) => {
  return {type: 'LOGIN_USER_SUCCESS', user}
}
