import React from 'react';

export default class PostForm extends React.Component {
  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Name:</label>
          <input className="form-control" ref={(input) => this._username = input}/>
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input className="form-control" ref={(input) => this._title = input}/>
        </div>
        <div className="form-group">
          <label>Body:</label>
          <textarea className="form-control" ref={(textarea) => this._body = textarea}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();

    let username = this._username;
    let title = this._title;
    let body = this._body;

    this.props.addPost(username.value, title.value, body.value);
  }
}
