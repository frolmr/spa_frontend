import React from 'react';
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import LocaleChange from './locale_change'
import Search from './search'
import { connect } from 'react-redux'

class Navigation extends React.Component {
  render() {
    const user = this.props.user
    const login_link = (
      <li>
        <Link to="/login" className="navbar-link">
          <FormattedMessage id='nav.loginLink' />
        </Link>
      </li>
    )
    const profile_link = (<p>zhopa</p>)
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav navbar-left">
            <li>
              <Link to="/" className="navbar-brand">
                <FormattedMessage id='nav.homeLink' />
              </Link>
            </li>
            {Object.keys(user).length === 0 ? login_link : profile_link}
          </ul>
          {Object.keys(user).length === 0 &&
            <LocaleChange />
          }
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Search />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Navigation)
