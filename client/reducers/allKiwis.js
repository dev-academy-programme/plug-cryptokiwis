import createKiwi from '../createKiwi'

const initialState = [
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi()
]

import RECEIVE_ALL_KIWIS from '../actions/kiwis'

export default function (state = initialState, action) {
  switch(action.type) {
    case RECEIVE_ALL_KIWIS:
      return action.kiwis
    default: return state
  }
}
