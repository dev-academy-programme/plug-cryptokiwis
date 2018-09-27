import {
  RECEIVE_UNCLAIMED_KIWIS,
} from '../actions/kiwis'

export default function (state = [], action) {
  switch(action.type) {
    case RECEIVE_UNCLAIMED_KIWIS:
      return action.kiwis
    default: return state
  }
}
