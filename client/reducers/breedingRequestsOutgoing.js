const initialState = [
  {
    sender: 'abc',
    receiver: 'xyz',
    sender_kiwi_id: 7,
    receiver_kiwi_id: 3
  }
]

export default function outgoing (state = initialState, action) {
  switch(action.type) {

    default: return state
  }
}
