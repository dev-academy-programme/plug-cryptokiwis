export const RECEIVE_INCOMING_BREEDING_REQUESTS = 'RECEIVE_INCOMING_BREEDING_REQUESTS'
export const RECEIVE_OUTGOING_BREEDING_REQUESTS = 'RECEIVE_OUTGOING_BREEDING_REQUESTS'

export const ADD_INCOMING_BREEDING_REQUEST = 'ADD_INCOMING_BREEDING_REQUEST'
export const ADD_OUTGOING_BREEDING_REQUEST = 'ADD_OUTGOING_BREEDING_REQUEST'

export const receiveIncomingBreedingRequests = requests => ({
  type: RECEIVE_INCOMING_BREEDING_REQUESTS,
  requests
})

export const receiveOutgoingBreedingRequests = requests => ({
  type: RECEIVE_OUTGOING_BREEDING_REQUESTS,
  requests
})

export const addIncomingBreedingRequest = request => ({
  type: ADD_INCOMING_BREEDING_REQUEST,
  request
})

export const addOutgoingBreedingRequest = request => ({
  type: ADD_OUTGOING_BREEDING_REQUEST,
  request
})
