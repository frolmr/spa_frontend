import axios from 'axios';

export default class PostApi {
  static getAllPosts() {
    return axios.get(process.env.REMOTE_HOST + '/api/posts').then(res => {
      return res.data;
    }).catch(error => {
      return error;
    });
  }

  static createNewPost(post) {
    return axios.post(process.env.REMOTE_HOST + '/api/posts', {
        "post": {
          "username": post.username,
          "title": post.title,
          "body": post.body
        }
      }).then(res => {
        return res.data;
      }).catch(error => {
        return error;
      });
  }
}
