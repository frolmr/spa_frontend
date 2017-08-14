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
}
