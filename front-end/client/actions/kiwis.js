export const SELECT_KIWI = 'SELECT_KIWI'
export const DESELECT_KIWI = 'DESELECT_KIWI'

export const RECEIVE_ALL_KIWIS = 'RECEIVE_ALL_KIWIS'
export const RECEIVE_MY_KIWIS = 'RECEIVE_MY_KIWIS'
export const RECEIVE_UNCLAIMED_KIWIS = "RECEIVE_UNCLAIMED_KIWIS"

export const ADD_KIWI = 'ADD_KIWI'
export const ADD_MY_KIWI = 'ADD_MY_KIWI'

export const receiveAllKiwis = kiwis => ({
  type: RECEIVE_ALL_KIWIS,
  kiwis
})

export const receiveMyKiwis = kiwis => ({
  type: RECEIVE_MY_KIWIS,
  kiwis
})

export const receiveUnclaimedKiwis = kiwis => ({
  type: RECEIVE_UNCLAIMED_KIWIS,
  kiwis
})

export const addKiwi = kiwi => ({
  type: ADD_KIWI,
  kiwi
})

export const addMyKiwi = kiwi => ({
  type: ADD_MY_KIWI,
  kiwi
})

export const selectKiwi = kiwi => ({
  type: SELECT_KIWI,
  kiwi
})

export const deselectKiwi = kiwi => ({
  type: DESELECT_KIWI,
  kiwi
})
