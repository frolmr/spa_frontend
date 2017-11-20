import React from 'react';
import store from '../store/store'
import { createPost } from '../actions/PostActions';
import { connect } from 'react-redux'
import { injectIntl, FormattedMessage } from 'react-intl'

class PostForm extends React.Component {

  validateForm = () => {
    if (this._username.value.trim().length == 0 || this._title.value.trim().length == 0 || this._body.value.trim().length == 0) {
      document.getElementById('submitButton').setAttribute('disabled', 'disabled')
    } else {
      document.getElementById('submitButton').removeAttribute('disabled')
    }
  }

  componentDidMount() {
    this.validateForm();
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
      <h3>{this.props.params}</h3>
        <div className="form-group">
          <label>
            <FormattedMessage id="postForm.name" />:
          </label>
          <input className="form-control" onChange={this.validateForm} ref={(input) => this._username = input}/>
        </div>
        <div className="form-group">
          <label>
            <FormattedMessage id="postForm.title" />:
          </label>
          <input className="form-control" onChange={this.validateForm} ref={(input) => this._title = input}/>
        </div>
        <div className="form-group">
          <label>
            <FormattedMessage id="postForm.url" />:
          </label>
          <input className="form-control" onChange={this.validateForm} ref={(input) => this._image_url = input}/>
        </div>
        <div className="form-group">
          <label>
            <FormattedMessage id="postForm.body" />:
          </label>
          <textarea className="form-control" onChange={this.validateForm} ref={(textarea) => this._body = textarea}/>
        </div>
        <button id='submitButton' type="submit" className={'btn btn-primary'} >
          <FormattedMessage id="postForm.submit" />
        </button>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();

    let post = {
      username: this._username.value,
      title: this._title.value,
      image: this._image_url.value,
      body: this._body.value
    }

    const key = this.props.user.key

    store.dispatch(createPost(post, key))

    this._username.value = this._title.value = this._image_url.value = this._body.value = ''
    this.validateForm()
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default injectIntl(connect(mapStateToProps)(PostForm))
