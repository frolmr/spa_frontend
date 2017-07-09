import axios from 'axios';

export default class PostApi {
  static getAllPosts() {
    return axios.get(process.env.REMOTE_HOST + '/api/posts').then(response => {
      return response.data;
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
      }).then(response => {
        return response.data;
      }).catch(error => {
        return error;
      });
  }

  static deletePost(post_id) {
    return axios.delete(process.env.REMOTE_HOST + '/api/posts/' + post_id).then(response => {
      return post_id;
    }).catch(error => {
      return error;
    });
  }

  static getPost(post_id) {
    return axios.get(process.env.REMOTE_HOST + '/api/posts/' + post_id).then(response => {
      return response.data;
    }).catch(error => {
      return error;
    });
  }
}
