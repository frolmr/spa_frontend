import React from 'react'
import store from '../store/store'
import { connect } from 'react-redux'
import { changeLocale } from '../actions/IntlActions'
import msgs from '../messages'
import { flattenMessages } from "../utils"

class LocaleChange extends React.Component {
  render() {
    return (
      <ul className="nav navbar-nav">
        <li>
          <a href="" onClick={this._changeLocale}>ru</a>
        </li>
        <li>
          <a href="" onClick={this._changeLocale}>en</a>
        </li>
      </ul>
    )
  }

  _changeLocale(event) {
    event.preventDefault()
    let locale = event.currentTarget.textContent
    let messages = flattenMessages(msgs[locale])
    store.dispatch(changeLocale(locale, messages))
  }
}

function mapStateToProps(state) {
  return {
    intl: state.intl
  }
}

export default connect(mapStateToProps)(LocaleChange)
