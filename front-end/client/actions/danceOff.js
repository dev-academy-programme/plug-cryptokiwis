export const RECEIVE_INCOMING_DANCE_OFF_REQUESTS = 'RECEIVE_INCOMING_DANCE_OFF_REQUESTS'
export const RECEIVE_OUTGOING_DANCE_OFF_REQUESTS = 'RECEIVE_OUTGOING_DANCE_OFF_REQUESTS'

export const ADD_OUTGOING_DANCE_OFF_REQUEST = 'ADD_OUTGOING_DANCE_OFF_REQUEST'
export const ADD_INCOMING_DANCE_OFF_REQUEST = 'ADD_INCOMING_DANCE_OFF_REQUEST'

export const receiveIncomingDanceOffRequests = requests => ({
  type: RECEIVE_INCOMING_DANCE_OFF_REQUESTS,
  requests
})

export const receiveOutgoingDanceOffRequests = requests => ({
  type: RECEIVE_OUTGOING_DANCE_OFF_REQUESTS,
  requests
})

export const addOutgoingDanceOffRequest = request => ({
  type: ADD_OUTGOING_DANCE_OFF_REQUEST,
  request
})

export const addIncomingDanceOffRequest = request => ({
  type: ADD_INCOMING_DANCE_OFF_REQUEST,
  request
})
