import {combineReducers} from 'redux'

import myKiwis from './myKiwis'
import key from './key'
import selectedKiwi from './selectedKiwi'
import allKiwis from './allKiwis'
import unclaimedKiwis from './unclaimedKiwis'
import breedingRequestsIncoming from './breedingRequestsIncoming'
import breedingRequestsOutgoing from './breedingRequestsOutgoing'
import danceOffRequestsIncoming from './danceOffRequestsIncoming'
import danceOffRequestsOutgoing from './danceOffRequestsOutgoing'

export default combineReducers({
  myKiwis,
  myKey: key,
  selectedKiwis: selectedKiwi,
  kiwis: allKiwis,
  unclaimedKiwis,
  breedingRequestsIncoming,
  breedingRequestsOutgoing,
  danceOffRequestsIncoming,
  danceOffRequestsOutgoing,
})
