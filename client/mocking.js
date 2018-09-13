import createKiwi from './createKiwi'

export const myKiwis = [
  createKiwi()
]

export const allKiwis = [
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi(),
  createKiwi()
]

export const breedingRequestsIncoming = [
  {
    id: 1,
    sender: 'xyz',
    receiver: 'abc',
    sender_kiwi_id: 7,
    receiver_kiwi_id: 1
  }
]

export const breedingRequestsOutgoing = [
  {
    id: 2,
    sender: 'abc',
    receiver: 'xyz',
    sender_kiwi_id: 1,
    receiver_kiwi_id: 5
  }
]

export const danceOffRequestsIncoming = [
  {
    id: 1,
    sender: 'xyz',
    receiver: 'abc',
    sender_kiwi_id: 7,
    receiver_kiwi_id: 1
  }
]

export const danceOffRequestsOutgoing = [
  {
    id: 2,
    sender: 'abc',
    receiver: 'xyz',
    sender_kiwi_id: 1,
    receiver_kiwi_id: 5
  }
]
