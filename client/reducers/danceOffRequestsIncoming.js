const initialState = [
  {
    id: 1,
    sender: 'xyz',
    receiver: 'abc',
    sender_kiwi_id: 7,
    receiver_kiwi_id: 1
  }
]

import RECEIVE_INCOMING_DANCE_OFF_REQUESTS from '../actions/danceOff'

export default function incoming (state = initialState, action) {
  switch(action.type) {
    case RECEIVE_INCOMING_DANCE_OFF_REQUESTS:
      return [...action.requests]
    default: return state
  }
}
