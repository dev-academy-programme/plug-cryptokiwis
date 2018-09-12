export default function selectedKiwi (state = [], action) {
  switch(action.type) {
    case 'SELECT_KIWI':
      return [...state, action.kiwi]
    case 'DESELECT_KIWI':
      return [...state].filter(kiwi => kiwi != action.kiwi)
    default: return state
  }
}
