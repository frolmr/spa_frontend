import initialState from '../reducers/initialState'
import configureStore from './configureStore'

const store = configureStore(initialState);

export default store
