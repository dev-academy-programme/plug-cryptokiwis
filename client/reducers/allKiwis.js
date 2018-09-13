import {RECEIVE_ALL_KIWIS} from '../actions/kiwis'

export default function (state = [], action) {
  switch(action.type) {
    case RECEIVE_ALL_KIWIS:
      return action.kiwis
    default: return state
  }
}
