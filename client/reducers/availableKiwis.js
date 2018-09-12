import createKiwi from '../createKiwi'

const initialState = [
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi()
]

export default function (state = initialState, action) {
  let newState = [...state]
  switch(action.type) {

    default: return state
  }
}
