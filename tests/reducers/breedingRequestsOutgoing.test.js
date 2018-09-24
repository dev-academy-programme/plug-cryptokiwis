import {
  RECEIVE_OUTGOING_BREEDING_REQUESTS,
  ADD_OUTGOING_BREEDING_REQUEST
} from '../../client/actions/breeding'

import reducer from '../../client/reducers/breedingRequestsOutgoing'

test('initial state', () => {
  const expected = []

  const actual = reducer(undefined, {})

  expect(actual).toEqual(expected)
})

test('RECEIVE_OUTGOING_BREEDING_REQUESTS case', () => {
  const requests = [
    {name: 'Kumura'}
  ]

  const action = {
    type: RECEIVE_OUTGOING_BREEDING_REQUESTS,
    requests
  }

  const actual = reducer([], action)

  expect(actual).toEqual(requests)
})

test('ADD_OUTGOING_BREEDING_REQUEST case', () => {
  const request = {name: 'Kumura'}

  const action = {
    type: ADD_OUTGOING_BREEDING_REQUEST,
    request
  }

  const actual = reducer([], action)

  expect(actual).toEqual([request])
})
