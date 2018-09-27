import {
  RECEIVE_INCOMING_DANCE_OFF_REQUESTS,
  RECEIVE_OUTGOING_DANCE_OFF_REQUESTS,
  ADD_INCOMING_DANCE_OFF_REQUEST,
  ADD_OUTGOING_DANCE_OFF_REQUEST,
  receiveIncomingDanceOffRequests,
  receiveOutgoingDanceOffRequests,
  addIncomingDanceOffRequest,
  addOutgoingDanceOffRequest
} from '../../client/actions/danceOff'

test('action types are correct', () => {
  expect(RECEIVE_INCOMING_DANCE_OFF_REQUESTS).toBe("RECEIVE_INCOMING_DANCE_OFF_REQUESTS")
  expect(RECEIVE_OUTGOING_DANCE_OFF_REQUESTS).toBe("RECEIVE_OUTGOING_DANCE_OFF_REQUESTS")
  expect(ADD_INCOMING_DANCE_OFF_REQUEST).toBe("ADD_INCOMING_DANCE_OFF_REQUEST")
  expect(ADD_OUTGOING_DANCE_OFF_REQUEST).toBe("ADD_OUTGOING_DANCE_OFF_REQUEST")
})

test('receiveIncomingDanceOffRequests action', () => {
  const requests = [
    {name: 'Kumura'}
  ]
  const expected = {
    type: RECEIVE_INCOMING_DANCE_OFF_REQUESTS,
    requests
  }

  const actual = receiveIncomingDanceOffRequests(requests)

  expect(actual).toEqual(expected)
  expect(actual.requests).toBe(requests)
})

test('receiveOutgoingDanceOffRequests action', () => {
  const requests = [
    {name: 'Kumura'}
  ]
  const expected = {
    type: RECEIVE_OUTGOING_DANCE_OFF_REQUESTS,
    requests
  }

  const actual = receiveOutgoingDanceOffRequests(requests)

  expect(actual).toEqual(expected)
  expect(actual.requests).toBe(requests)
})

test('addIncomingDanceOffRequest action', () => {
  const request = {name: 'Kumura'}

  const expected = {
    type: ADD_INCOMING_DANCE_OFF_REQUEST,
    request
  }

  const actual = addIncomingDanceOffRequest(request)

  expect(actual).toEqual(expected)
  expect(actual.request).toBe(request)
})

test('addOutgoingDanceOffRequest action', () => {
  const request = {name: 'Kumura'}

  const expected = {
    type: ADD_OUTGOING_DANCE_OFF_REQUEST,
    request
  }

  const actual = addOutgoingDanceOffRequest(request)

  expect(actual).toEqual(expected)
  expect(actual.request).toBe(request)
})
