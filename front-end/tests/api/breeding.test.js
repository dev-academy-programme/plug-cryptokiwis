import nock from 'nock'

import {
  getIncomingBreedingRequests,
  getOutgoingBreedingRequests
} from '../../client/api/breeding'


jest.mock('../../client/actions/breeding', () => ({
  receiveIncomingBreedingRequests: requests => requests,
  receiveOutgoingBreedingRequests: requests => requests
}))

jest.mock('../../client/api/endpoint', () => ('/_api/v1/'))

test('getIncomingBreedingRequests', () => {
  const key = 'fake_key'

  const fakeRequests = [
    {name: 'Kumura'}
  ]

  const scope = nock('http://localhost:80')
  .get('/_api/v1/breeding/incoming')
  .query({userKey: 'fake_key'})
  .reply(200, fakeRequests)

  const dispatch = jest.fn()
    .mockImplementationOnce(requests => {
       expect(requests).toEqual(fakeRequests)
       scope.done()
       done()
     })

  getIncomingBreedingRequests(key)(dispatch)

})

test('getOutgoingBreedingRequests', () => {
  const key = 'fake_key'

  const fakeRequests = [
    {name: 'Kumura'}
  ]

  const scope = nock('http://localhost:80')
  .get('/_api/v1/breeding/outgoing')
  .query({userKey: 'fake_key'})
  .reply(200, fakeRequests)

  const dispatch = jest.fn()
    .mockImplementationOnce(requests => {
       expect(requests).toEqual(fakeRequests)
       scope.done()
       done()
     })

  getOutgoingBreedingRequests(key)(dispatch)

})
