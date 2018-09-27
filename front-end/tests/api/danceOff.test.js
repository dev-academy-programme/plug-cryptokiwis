import nock from 'nock'

import {
  getIncomingDanceOffRequests,
  getOutgoingDanceOffRequests
} from '../../client/api/danceOff'


jest.mock('../../client/actions/danceOff', () => ({
  receiveIncomingDanceOffRequests: requests => requests,
  receiveOutgoingDanceOffRequests: requests => requests
}))

jest.mock('../../client/api/endpoint', () => ('/_api/v1/'))

test('getIncomingDanceOffRequests', () => {
  const key = 'fake_key'

  const fakeRequests = [
    {name: 'Kumura'}
  ]

  const scope = nock('http://localhost:80')
  .get('/_api/v1/danceoff/incoming')
  .query({userKey: 'fake_key'})
  .reply(200, fakeRequests)

  const dispatch = jest.fn()
    .mockImplementationOnce(requests => {
       expect(requests).toEqual(fakeRequests)
       scope.done()
       done()
     })

  getIncomingDanceOffRequests(key)(dispatch)

})

test('getOutgoingDanceOffRequests', () => {
  const key = 'fake_key'

  const fakeRequests = [
    {name: 'Kumura'}
  ]

  const scope = nock('http://localhost:80')
  .get('/_api/v1/danceoff/outgoing')
  .query({userKey: 'fake_key'})
  .reply(200, fakeRequests)

  const dispatch = jest.fn()
    .mockImplementationOnce(requests => {
       expect(requests).toEqual(fakeRequests)
       scope.done()
       done()
     })

  getOutgoingDanceOffRequests(key)(dispatch)

})
