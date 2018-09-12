const initialState = [
  {
    sender: 'abc',
    receiver: 'xyz',
    sender_kiwi_id: 1,
    receiver_kiwi_id: 5
  }
]

export default function outgoing (state = initialState, action) {
  switch(action.type) {

    default: return state
  }
}
