import {
  RECEIVE_ALL_KIWIS,
  ADD_KIWI
} from '../../client/actions/kiwis'

import reducer from '../../client/reducers/allKiwis'

test('initial state', () => {
  const expected = []

  const actual = reducer(undefined, {})

  expect(actual).toEqual(expected)
})

test('RECEIVE_ALL_KIWIS case', () => {
  const kiwis = [
    {name: 'Kumura'}
  ]
  const action = {
    type: RECEIVE_ALL_KIWIS,
    kiwis
  }

  const actual = reducer([], action)

  expect(actual).toBe(kiwis)
})

test('ADD_KIWI case', () => {
  const kiwi = {name: 'Kumura'}

  const action = {
    type: ADD_KIWI,
    kiwi
  }

  const actual = reducer([], action)

  expect(actual).toEqual([kiwi])
})

test('ADD_KIWI case', () => {
  const bob = {name: 'Bob'}
  const initialState = [bob]
  const kiwi = {name: 'Kumura'}

  const action = {
    type: ADD_KIWI,
    kiwi
  }

  const expected = [bob, kiwi]

  const actual = reducer(initialState, action)

  expect(actual).toEqual(expected)
})
