import {
  RECEIVE_INCOMING_DANCE_OFF_REQUESTS,
  ADD_INCOMING_DANCE_OFF_REQUEST
} from '../../client/actions/danceOff'

import reducer from '../../client/reducers/danceOffRequestsIncoming'

test('initial state', () => {
  const expected = []

  const actual = reducer(undefined, {})

  expect(actual).toEqual(expected)
})

test('RECEIVE_INCOMING_DANCE_OFF_REQUESTS case', () => {
  const requests = [
    {name: 'Kumura'}
  ]

  const action = {
    type: RECEIVE_INCOMING_DANCE_OFF_REQUESTS,
    requests
  }

  const actual = reducer([], action)

  expect(actual).toEqual(requests)
})

test('ADD_INCOMING_DANCE_OFF_REQUEST case', () => {
  const request = {name: 'Kumura'}

  const action = {
    type: ADD_INCOMING_DANCE_OFF_REQUEST,
    request
  }

  const actual = reducer([], action)

  expect(actual).toEqual([request])
})
