import {
  RECEIVE_INCOMING_DANCE_OFF_REQUESTS,
  ADD_INCOMING_DANCE_OFF_REQUEST
} from '../actions/danceOff'

export default function incoming (state = [], action) {
  switch(action.type) {
    case RECEIVE_INCOMING_DANCE_OFF_REQUESTS:
      return [...action.requests]
    case ADD_INCOMING_DANCE_OFF_REQUEST:
      return [...state, action.request]
    default: return state
  }
}
