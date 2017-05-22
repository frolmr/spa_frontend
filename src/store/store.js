import initialState from '../reducers/initialState'
import configureStore from './configureStore.js'

const store = configureStore(initialState);

export default store
