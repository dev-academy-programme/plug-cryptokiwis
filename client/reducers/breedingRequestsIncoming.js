import {RECEIVE_INCOMING_BREEDING_REQUESTS} from '../actions/breeding'

export default function incoming (state = [], action) {
  switch(action.type) {
    case RECEIVE_INCOMING_BREEDING_REQUESTS:
      return [...action.requests]
    default: return state
  }
}
