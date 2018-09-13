import {RECEIVE_OUTGOING_BREEDING_REQUESTS} from '../actions/breeding'

export default function outgoing (state = [], action) {
  switch(action.type) {
    case RECEIVE_OUTGOING_BREEDING_REQUESTS:
      return [...action.requests]
    default: return state
  }
}
