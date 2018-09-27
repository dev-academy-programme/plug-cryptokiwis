import {
  RECEIVE_INCOMING_BREEDING_REQUESTS,
  ADD_INCOMING_BREEDING_REQUEST
} from '../../client/actions/breeding'

import reducer from '../../client/reducers/breedingRequestsIncoming'

test('initial state', () => {
  const expected = []

  const actual = reducer(undefined, {})

  expect(actual).toEqual(expected)
})

test('RECEIVE_INCOMING_BREEDING_REQUESTS case', () => {
  const requests = [
    {name: 'Kumura'}
  ]

  const action = {
    type: RECEIVE_INCOMING_BREEDING_REQUESTS,
    requests
  }

  const actual = reducer([], action)

  expect(actual).toEqual(requests)
})

test('ADD_INCOMING_BREEDING_REQUEST case', () => {
  const request = {name: 'Kumura'}

  const action = {
    type: ADD_INCOMING_BREEDING_REQUEST,
    request
  }

  const actual = reducer([], action)

  expect(actual).toEqual([request])
})
