import {combineReducers} from 'redux'

import myKiwis from './myKiwis'
import availableKiwis from './availableKiwis'

export default combineReducers({
  myKiwis,
  availableKiwis
})
