export const RECEIVE_INCOMING_DANCE_OFF_REQUESTS = 'RECEIVE_INCOMING_DANCE_OFF_REQUESTS'
export const RECEIVE_OUTGOING_DANCE_OFF_REQUESTS = 'RECEIVE_OUTGOING_DANCE_OFF_REQUESTS'

export const receiveIncomingDanceOffRequests = requests => ({
  type: RECEIVE_INCOMING_DANCE_OFF_REQUESTS,
  requests
})

export const receiveOutgoingDanceOffRequests = requests => ({
  type: RECEIVE_OUTGOING_DANCE_OFF_REQUESTS,
  requests
})
