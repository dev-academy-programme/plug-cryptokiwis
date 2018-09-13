import {RECEIVE_OUTGOING_DANCE_OFF_REQUESTS} from '../actions/danceOff'

export default function outgoing (state = [], action) {
  switch(action.type) {
    case RECEIVE_OUTGOING_DANCE_OFF_REQUESTS:
      return [...action.requests]
    default: return state
  }
}
