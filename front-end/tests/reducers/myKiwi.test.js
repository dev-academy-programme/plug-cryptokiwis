import {
  RECEIVE_MY_KIWIS,
  ADD_MY_KIWI
} from '../../client/actions/kiwis'

import reducer from '../../client/reducers/myKiwis'

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
    type: RECEIVE_MY_KIWIS,
    kiwis
  }

  const actual = reducer([], action)

  expect(actual).toBe(kiwis)
})

test('MY_KIWI case', () => {
  const kiwi = {name: 'Kumura'}

  const action = {
    type: ADD_MY_KIWI,
    kiwi
  }

  const actual = reducer([], action)

  expect(actual).toEqual([kiwi])
})

test('MY_KIWI case', () => {
  const bob = {name: 'Bob'}
  const initialState = [bob]
  const kiwi = {name: 'Kumura'}

  const action = {
    type: ADD_MY_KIWI,
    kiwi
  }

  const expected = [bob, kiwi]

  const actual = reducer(initialState, action)

  expect(actual).toEqual(expected)
})
