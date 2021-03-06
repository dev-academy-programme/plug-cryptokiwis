import {
  RECEIVE_ALL_KIWIS,
  ADD_KIWI
} from '../actions/kiwis'

import {LOGOUT} from '../actions/key'

export default function (state = [], action) {
  switch(action.type) {
    case RECEIVE_ALL_KIWIS:
      return action.kiwis
    case ADD_KIWI:
      return [...state, action.kiwi]
    case LOGOUT:
      return []
    default: return state
  }
}
