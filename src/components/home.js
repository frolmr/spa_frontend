import React from 'react';
import Posts from './posts';
import PostForm from './post_form';
import store from '../store/store'
import { connect } from 'react-redux'

class App extends React.Component {

  render() {
    const loginMessage = (
      <div className="row">
        <div className="col-md-12">
          <h2>To see the posts please login first!</h2>
        </div>
      </div>)
    const mainLayout = (
      <div className="row">
        <div className="col-md-6">
          <Posts />
        </div>
        <div className="col-md-6">
          <PostForm />
        </div>
    </div>)
    const user = this.props.user
    return (
      Object.keys(user).length === 0 ? loginMessage : mainLayout
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
