import React from 'react'
import store from '../store/store'
import { connect } from 'react-redux'
import { loadPosts } from '../actions/PostActions'

class Sort extends React.Component {
  render () {
    return (
      <form className="form-inline">
        <label>Sort by:</label>
        <select className="form-control" onChange={this._handleChange.bind(this)}>
          <option value="title">Title</option>
          <option value="username">Autor</option>
        </select>
      </form>
    )
  }

  _handleChange(event) {
    let order = event.target.value
    const key = this.props.user.key

    store.dispatch(loadPosts(key, 1, null, order))
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Sort)
