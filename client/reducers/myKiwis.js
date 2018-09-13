import {RECEIVE_MY_KIWIS} from '../actions/kiwis'

export default function myKiwisReducer (state = [], action) {
  let newState = [...state]
  switch(action.type) {
    case RECEIVE_MY_KIWIS:
      return action.kiwis
    default: return state
  }
}
