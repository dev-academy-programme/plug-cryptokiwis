import createKiwi from '../createKiwi'

const initialState = [
  createKiwi()
]

export default function myKiwisReducer (state = initialState, action) {
  let newState = [...state]
  switch(action.type) {
    default: return state
  }
}
