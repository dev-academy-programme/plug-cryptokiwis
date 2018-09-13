const initialState = [
  {
    id: 1,
    sender: 'xyz',
    receiver: 'abc',
    sender_kiwi_id: 1,
    receiver_kiwi_id: 6
  }
]

import RECEIVE_OUTGOING_DANCE_OFF_REQUESTS from '../actions/danceOff'

export default function outgoing (state = initialState, action) {
  switch(action.type) {
    case RECEIVE_OUTGOING_DANCE_OFF_REQUESTS:
      return [...action.requests]
    default: return state
  }
}
