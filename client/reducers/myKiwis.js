import createKiwi from '../createKiwi'

const initialState = [
  createKiwi()
]

import RECEIVE_MY_KIWIS from '../actions/myKiwis'

export default function myKiwisReducer (state = initialState, action) {
  let newState = [...state]
  switch(action.type) {
    case RECEIVE_MY_KIWIS:
      return action.kiwis
    default: return state
  }
}
