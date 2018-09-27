import {
  RECEIVE_INCOMING_BREEDING_REQUESTS,
  RECEIVE_OUTGOING_BREEDING_REQUESTS,
  ADD_INCOMING_BREEDING_REQUEST,
  ADD_OUTGOING_BREEDING_REQUEST,
  receiveIncomingBreedingRequests,
  receiveOutgoingBreedingRequests,
  addIncomingBreedingRequest,
  addOutgoingBreedingRequest
} from '../../client/actions/breeding'

test('action types are correct', () => {
  expect(RECEIVE_INCOMING_BREEDING_REQUESTS).toBe("RECEIVE_INCOMING_BREEDING_REQUESTS")
  expect(RECEIVE_OUTGOING_BREEDING_REQUESTS).toBe("RECEIVE_OUTGOING_BREEDING_REQUESTS")
  expect(ADD_INCOMING_BREEDING_REQUEST).toBe("ADD_INCOMING_BREEDING_REQUEST")
  expect(ADD_OUTGOING_BREEDING_REQUEST).toBe("ADD_OUTGOING_BREEDING_REQUEST")
})

test('receiveIncomingBreedingRequests action', () => {
  const requests = [
    {name: 'Kumura'}
  ]
  const expected = {
    type: RECEIVE_INCOMING_BREEDING_REQUESTS,
    requests
  }

  const actual = receiveIncomingBreedingRequests(requests)

  expect(actual).toEqual(expected)
  expect(actual.requests).toBe(requests)
})

test('receiveOutgoingBreedingRequests action', () => {
  const requests = [
    {name: 'Kumura'}
  ]
  const expected = {
    type: RECEIVE_OUTGOING_BREEDING_REQUESTS,
    requests
  }

  const actual = receiveOutgoingBreedingRequests(requests)

  expect(actual).toEqual(expected)
  expect(actual.requests).toBe(requests)
})

test('addIncomingBreedingRequest action', () => {
  const request = {name: 'Kumura'}

  const expected = {
    type: ADD_INCOMING_BREEDING_REQUEST,
    request
  }

  const actual = addIncomingBreedingRequest(request)

  expect(actual).toEqual(expected)
  expect(actual.request).toBe(request)
})

test('addOutgoingBreedingRequest action', () => {
  const request = {name: 'Kumura'}

  const expected = {
    type: ADD_OUTGOING_BREEDING_REQUEST,
    request
  }

  const actual = addOutgoingBreedingRequest(request)

  expect(actual).toEqual(expected)
  expect(actual.request).toBe(request)
})
