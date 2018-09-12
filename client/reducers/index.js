import {combineReducers} from 'redux'

import myKiwis from './myKiwis'
import availableKiwis from './availableKiwis'
import key from './key'
import selectedKiwi from './selectedKiwi'

export default combineReducers({
  myKiwis,
  availableKiwis,
  myKey: key,
  selectedKiwis: selectedKiwi
})
