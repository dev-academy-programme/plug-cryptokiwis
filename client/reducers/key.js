import {get, set, remove} from '../localstorage'

const initialState = get('key') || null

export default function keyReducer (state = initialState, action) {
  switch(action.type) {
    case 'SAVE_KEY':
      set('key', action.key)
      return action.key
    case 'LOGOUT':
      remove('key')
      return null
    default: return state
  }
}
