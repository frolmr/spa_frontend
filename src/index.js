import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { Provider } from "react-redux"
import { addLocaleData } from 'react-intl'
import { IntlProvider } from "react-intl-redux"
import store from "./store/store"
import { BrowserRouter as Router, Route } from "react-router-dom";
import en from "react-intl/locale-data/en"
import ru from "react-intl/locale-data/ru"

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
