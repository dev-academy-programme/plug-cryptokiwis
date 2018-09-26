import {
  RECEIVE_MY_KIWIS,
  ADD_MY_KIWI
} from '../actions/kiwis'

export default function myKiwisReducer (state = [], action) {
  let newState = [...state]
  switch(action.type) {
    case RECEIVE_MY_KIWIS:
      return action.kiwis
    case ADD_MY_KIWI:
      return [...state, action.kiwi]
    default: return state
  }
}
