import axios from 'axios';

export default class UserApi {
  static fetchUser(user) {
    return axios.post(process.env.REMOTE_HOST + '/user_token', {
      "auth": {
        "email": user.email,
        "password": user.password
      }
    }).then(response => {
      return response.data.jwt;
    }).catch(error => {
      return error
    });
  }

  static getUserLocale(key) {
    return axios.get(process.env.REMOTE_HOST + '/api/user',
      { headers: { Authorization: "Bearer " + key }})
      .then(response => {
        return response.data.locale;
      }).catch(error => {
        return error;
      });
  }

  static updateUserLocale(key, user) {
    return axios.post(process.env.REMOTE_HOST + '/api/update_user', {
      "user": {
        "locale": user.locale
      }},
      { headers: { Authorization: "Bearer " + key }})
      .then(response => {
        return response.data;
      }).catch(error => {
        return error;
      });
  }
}
