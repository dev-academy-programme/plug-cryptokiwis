const initialState = [
  {
    id: 1,
    sender: 'xyz',
    receiver: 'abc',
    sender_kiwi_id: 7,
    receiver_kiwi_id: 1
  }
]

import RECEIVE_INCOMING_BREEDING_REQUESTS from '../actions/breeding'

export default function incoming (state = initialState, action) {
  switch(action.type) {
    case RECEIVE_INCOMING_BREEDING_REQUESTS:
      return [...action.requests]
    default: return state
  }
}
