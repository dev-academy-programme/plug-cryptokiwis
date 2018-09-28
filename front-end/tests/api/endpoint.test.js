import endpoint from '../../client/api/endpoint'

test('endpoint is correct', () => {
  const expected = 'http://localhost:8181/_api/v1/'

  expect(endpoint).toBe(expected)
})
