import endpoint from '../../client/api/endpoint'

test('endpoint is correct', () => {
  const expected = '/_api/v1/'

  expect(endpoint).toBe(expected)
})
