export const RECEIVE_INCOMING_BREEDING_REQUESTS = 'RECEIVE_INCOMING_BREEDING_REQUESTS'
export const RECEIVE_OUTGOING_BREEDING_REQUESTS = 'RECEIVE_OUTGOING_BREEDING_REQUESTS'

export const receiveIncomingBreedingRequests = requests => ({
  type: RECEIVE_INCOMING_BREEDING_REQUESTS,
  requests
})

export const receiveOutgoingBreedingRequests = requests => ({
  type: RECEIVE_OUTGOING_BREEDING_REQUESTS,
  requests
})
