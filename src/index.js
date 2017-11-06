import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { Provider } from "react-redux"
// import { IntlProvider, addLocaleData } from "react-intl"
import { addLocaleData } from 'react-intl'
import { IntlProvider } from "react-intl-redux"
import {loadPosts, createPost, removePost} from "./actions/PostActions";
import store from "./store/store"
import { BrowserRouter as Router, Route } from "react-router-dom";
import messages from "./messages"
import en from "react-intl/locale-data/en"
import ru from "react-intl/locale-data/ru"
import { flattenMessages } from "./utils"

addLocaleData([...en, ...ru])

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <Router>
        <App/>
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
)
