import createKiwi from '../createKiwi'

const initialState = [
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi()
]

export default function (state = initialState, action) {
  switch(action.type) {

    default: return state
  }
}