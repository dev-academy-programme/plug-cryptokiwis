import {
  RECEIVE_OUTGOING_BREEDING_REQUESTS,
  ADD_OUTGOING_BREEDING_REQUEST
} from '../actions/breeding'

export default function outgoing (state = [], action) {
  switch(action.type) {
    case RECEIVE_OUTGOING_BREEDING_REQUESTS:
      return [...action.requests]
    case ADD_OUTGOING_BREEDING_REQUEST:
      return [...state, action.request]
    default: return state
  }
}
