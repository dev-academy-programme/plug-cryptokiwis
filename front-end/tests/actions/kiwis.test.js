import {
  RECEIVE_ALL_KIWIS,
  RECEIVE_MY_KIWIS,
  ADD_KIWI,
  ADD_MY_KIWI,
  SELECT_KIWI,
  DESELECT_KIWI,
  receiveAllKiwis,
  receiveMyKiwis,
  addKiwi,
  addMyKiwi,
  selectKiwi,
  deselectKiwi
} from '../../client/actions/kiwis'

test('action types are correct', () => {
  expect(RECEIVE_ALL_KIWIS).toBe("RECEIVE_ALL_KIWIS")
  expect(RECEIVE_MY_KIWIS).toBe("RECEIVE_MY_KIWIS")
  expect(ADD_KIWI).toBe("ADD_KIWI")
  expect(ADD_MY_KIWI).toBe("ADD_MY_KIWI")
  expect(SELECT_KIWI).toBe("SELECT_KIWI")
  expect(DESELECT_KIWI).toBe("DESELECT_KIWI")
})

test('receiveAllKiwis action', () => {
  const kiwis = [
    {name: 'Kumura'}
  ]
  const expected = {
    type: RECEIVE_ALL_KIWIS,
    kiwis
  }

  const actual = receiveAllKiwis(kiwis)

  expect(actual).toEqual(expected)
  expect(actual.kiwis).toBe(kiwis)
})

test('receiveMyKiwis action', () => {
  const kiwis = [
    {name: 'Kumura'}
  ]
  const expected = {
    type: RECEIVE_MY_KIWIS,
    kiwis
  }

  const actual = receiveMyKiwis(kiwis)

  expect(actual).toEqual(expected)
  expect(actual.kiwis).toBe(kiwis)
})

test('addKiwi action', () => {
  const kiwi = {name: 'Kumura'}
  const expected = {
    type: ADD_KIWI,
    kiwi
  }

  const actual = addKiwi(kiwi)

  expect(actual).toEqual(expected)
  expect(actual.kiwi).toBe(kiwi)
})

test('addMyKiwi action', () => {
  const kiwi = {name: 'Kumura'}
  const expected = {
    type: ADD_MY_KIWI,
    kiwi
  }

  const actual = addMyKiwi(kiwi)

  expect(actual).toEqual(expected)
  expect(actual.kiwi).toBe(kiwi)
})

test('selectKiwi action', () => {
  const kiwi = {name: 'Kumura'}
  const expected = {
    type: SELECT_KIWI,
    kiwi
  }

  const actual = selectKiwi(kiwi)

  expect(actual).toEqual(expected)
})

test('deselectKiwi action', () => {
  const kiwi = {name: 'Kumura'}
  const expected = {
    type: DESELECT_KIWI,
    kiwi
  }

  const actual = deselectKiwi(kiwi)

  expect(actual).toEqual(expected)
})
