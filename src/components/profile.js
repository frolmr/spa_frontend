import React from 'react';
import { connect } from 'react-redux'
import Select from 'react-select'
import store from '../store/store'
import { updateUser } from '../actions/UserActions'

class Profile extends React.Component {
  render() {
    const options = [
      { value: 'en', label: 'En'  },
      { value: 'ru', label: 'Ru'  }
    ];
    return (
      <Select
        name="form-field-name"
        options={options}
        onChange={this._updateLocale}
      />
    )
  }

  _updateLocale = (locale) => {
    const key = this.props.user.key
    store.dispatch(updateUser(key, locale))
  }
}

function mapStateToProps(state) {
  return {
    intl: state.intl,
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
