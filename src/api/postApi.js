import axios from 'axios';

export default class PostApi {
  static getAllPosts(key, page, query, order) {
    return axios.get(process.env.REMOTE_HOST + '/api/posts',
      { headers: { Authorization: "Bearer " + key },
        params: {
          "page":  page,
          "query": query,
          "order": order
        }})
      .then(response => {
      return response.data;
    }).catch(error => {
      return error;
    });
  }

  static createNewPost(post, key) {
    return axios.post(process.env.REMOTE_HOST + '/api/posts', {
      "post": {
        "username": post.username,
        "title": post.title,
        "body": post.body,
        "remote_image_url": post.image
      }},
      { headers: { Authorization: "Bearer " + key }})
      .then(response => {
        return response.data;
      }).catch(error => {
        return error;
      });
  }

  static deletePost(post_id, key) {
    return axios.delete(process.env.REMOTE_HOST + '/api/posts/' + post_id,
      { headers: { Authorization: "Bearer " + key }})
      .then(response => {
      return post_id;
    }).catch(error => {
      return error;
    });
  }

  static getPost(post_id, key) {
    return axios.get(process.env.REMOTE_HOST + '/api/posts/' + post_id,
      { headers: { Authorization: "Bearer " + key }})
      .then(response => {
      return response.data;
    }).catch(error => {
      return error;
    });
  }
}
