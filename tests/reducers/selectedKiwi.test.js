import {
  SELECT_KIWI,
  DESELECT_KIWI
} from '../../client/actions/kiwis'

import reducer from '../../client/reducers/selectedKiwi'

test('initialState', () => {
  const expected = []

  const actual = reducer(undefined, {})

  expect(actual).toEqual(expected)
})

test('SELECT_KIWI', () => {
  const kiwi = {name: 'Kumura'}
  const action = {
    type: SELECT_KIWI,
    kiwi
  }
  const expected = [kiwi]

  const actual = reducer([], action)

  expect(actual).toEqual(expected)
})

test('SELECT_KIWI', () => {
  const kiwi = {name: 'Kumura'}
  const initialState = [kiwi]
  const action = {
    type: DESELECT_KIWI,
    kiwi
  }
  const expected = []

  const actual = reducer(initialState, action)

  expect(actual).toEqual(expected)
})
