import {
  RECEIVE_INCOMING_BREEDING_REQUESTS,
  ADD_INCOMING_BREEDING_REQUEST
} from '../actions/breeding'

export default function incoming (state = [], action) {
  switch(action.type) {
    case RECEIVE_INCOMING_BREEDING_REQUESTS:
      return [...action.requests]
    case ADD_INCOMING_BREEDING_REQUEST:
      return [...state, action.request]
    default: return state
  }
}
