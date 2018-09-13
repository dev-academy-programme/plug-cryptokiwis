const initialState = [
  {
    id: 1,
    sender: 'xyz',
    receiver: 'abc',
    sender_kiwi_id: 1,
    receiver_kiwi_id: 6
  }
]

export default function outgoing (state = initialState, action) {
  switch(action.type) {

    default: return state
  }
}
