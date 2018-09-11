export default function keyReducer (state = null, action) {
  console.log({action});
  switch(action.type) {
    case 'SAVE_KEY':
      return action.key
    default: return state
  }
}
