import {
  RECEIVE_OUTGOING_DANCE_OFF_REQUESTS,
  ADD_OUTGOING_DANCE_OFF_REQUEST
} from '../actions/danceOff'

export default function outgoing (state = [], action) {
  switch(action.type) {
    case RECEIVE_OUTGOING_DANCE_OFF_REQUESTS:
      return [...action.requests]
    case ADD_OUTGOING_DANCE_OFF_REQUEST:
      return [...state, action.request]
    default: return state
  }
}
