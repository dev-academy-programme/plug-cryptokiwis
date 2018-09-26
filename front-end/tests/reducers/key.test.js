import {
  SAVE_KEY,
  LOGOUT
} from '../../client/actions/key'

import reducer from '../../client/reducers/key'

jest.mock('../../client/localstorage', () => ({
  set: (key, value) => value,
  get: (key) => 'fake_key',
  remove: key => key
}))

test('initial state saved key', () => {
  const expected = 'fake_key'

  const actual = reducer(undefined, {})

  expect(actual).toEqual(expected)
})

test('SAVE_KEY', () => {
  const key = "fake_key"
  const action = {
    type: SAVE_KEY,
    key
  }

  const actual = reducer(null, action)

  expect(actual).toEqual(key)
})

test('LOGOUT', () => {
  const initialState = "fake_key"
  const action = {
    type: LOGOUT
  }
  const expected = null

  const actual = reducer(initialState, action)

  expect(actual).toBe(expected)
})
