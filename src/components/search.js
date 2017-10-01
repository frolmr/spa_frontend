import React from 'react'
import store from '../store/store'
import { connect } from 'react-redux'
import { loadPosts } from '../actions/PostActions'

class Search extends React.Component {
  render() {
    return (
      <form className="form-inline" onSubmit={this._handleSubmit.bind(this)}>
        <input className="form-control" ref={(input) => this._query = input}/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    )
  }

  _handleSubmit(event) {
    event.preventDefault()

    let query = this._query.value
    const key = this.props.user.key

    store.dispatch(loadPosts(key, 1, query))
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Search)
