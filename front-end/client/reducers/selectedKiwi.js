import {
  SELECT_KIWI,
  DESELECT_KIWI
} from '../actions/kiwis'

export default function selectedKiwis (state = [], action) {
  switch(action.type) {
    case SELECT_KIWI:
      return [...state, action.kiwi]
    case DESELECT_KIWI:
      return [...state].filter(kiwi => kiwi != action.kiwi)
    default: return state
  }
}
