import {combineReducers} from 'redux'

import myKiwis from './myKiwis'
import availableKiwis from './availableKiwis'
import key from './key'

export default combineReducers({
  myKiwis,
  availableKiwis,
  myKey: key
})
