import {
  RECEIVE_MY_KIWIS,
  ADD_MY_KIWI
} from '../actions/kiwis'

import {LOGOUT} from '../actions/key'


export default function myKiwisReducer (state = [], action) {
  let newState = [...state]
  switch(action.type) {
    case RECEIVE_MY_KIWIS:
      return action.kiwis
    case ADD_MY_KIWI:
      return [...state, action.kiwi]
    case LOGOUT:
      return []
    default: return state
  }
}
