export const SELECT_KIWI = 'SELECT_KIWI'
export const DESELECT_KIWI = 'DESELECT_KIWI'

export const RECEIVE_ALL_KIWIS = 'RECEIVE_ALL_KIWIS'
export const RECEIVE_MY_KIWIS = 'RECEIVE_MY_KIWIS'

export const receiveAllKiwis = kiwis => ({
  type: RECEIVE_ALL_KIWIS,
  kiwis
})

export const receiveMyKiwis = kiwis => ({
  type: RECEIVE_MY_KIWIS,
  kiwis
})
