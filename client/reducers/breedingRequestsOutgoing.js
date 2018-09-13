const initialState = [
  {
    id: 2,
    sender: 'abc',
    receiver: 'xyz',
    sender_kiwi_id: 1,
    receiver_kiwi_id: 5
  }
]

import RECEIVE_OUTGOING_BREEDING_REQUESTS from '../actions/breeding'

export default function outgoing (state = initialState, action) {
  switch(action.type) {
    case RECEIVE_OUTGOING_BREEDING_REQUESTS:
      return [...action.requests]
    default: return state
  }
}
