import {combineReducers} from 'redux'

import myKiwis from './myKiwis'
import key from './key'
import selectedKiwi from './selectedKiwi'
import allKiwis from './allKiwis'

export default combineReducers({
  myKiwis,
  myKey: key,
  selectedKiwis: selectedKiwi,
  kiwis: allKiwis
})
