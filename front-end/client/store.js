import reducers from './reducers'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

let store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware)
))

export default store
