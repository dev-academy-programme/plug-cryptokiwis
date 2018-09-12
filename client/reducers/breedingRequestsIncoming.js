const initialState = [
  {
    sender: 'xyz',
    receiver: 'abc',
    sender_kiwi_id: 1,
    receiver_kiwi_id: 7
  }
]

export default function incoming (state = initialState, action) {
  switch(action.type) {

    default: return state
  }
}
