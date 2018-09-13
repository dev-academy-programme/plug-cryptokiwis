import {RECEIVE_INCOMING_DANCE_OFF_REQUESTS} from '../actions/danceOff'

export default function incoming (state = [], action) {
  switch(action.type) {
    case RECEIVE_INCOMING_DANCE_OFF_REQUESTS:
      return [...action.requests]
    default: return state
  }
}
