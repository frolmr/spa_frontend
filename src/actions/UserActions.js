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

export const getUser = (key) => {
  return function(dispatch) {
    return userApi.getUser(key).then(user => {
      dispatch(getUserSuccess(user));
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

export const getUserSuccess = (user) => {
  return {type: 'GET_USER_SUCCESS', user}
}

export const updateUserSuccess = (user) => {
  return {type: 'UPDATE_USER_SUCCESS', user}
}
