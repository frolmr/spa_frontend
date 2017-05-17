import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js'
import {loadPosts, createPost} from './actions/PostActions';
import initialState from './reducers/initialState'

const store = configureStore(initialState);
store.dispatch(loadPosts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
