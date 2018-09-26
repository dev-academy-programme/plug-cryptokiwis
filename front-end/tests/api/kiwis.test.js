import nock from 'nock'

import {
  getAllKiwis,
  getMyKiwis
} from '../../client/api/kiwis'


jest.mock('../../client/actions/kiwis', () => ({
  receiveAllKiwis: kiwis => kiwis,
  receiveMyKiwis: kiwis => kiwis
}))

jest.mock('../../client/api/endpoint', () => ('/_api/v1/'))

test('getAllKiwis request', (done) => {
  const key = 'fake_key'

  const fakeKiwis = [
    {name: 'Kumura'}
  ]

  const scope = nock('http://localhost:80')
  .get('/_api/v1/kiwis')
  .query({userKey: 'fake_key'})
  .reply(200, fakeKiwis)

  const dispatch = jest.fn()
    .mockImplementationOnce(kiwis => {
       expect(kiwis).toEqual(fakeKiwis)
       scope.done()
       done()
     })

  getAllKiwis(key)(dispatch)

})

test('getMyKiwis request', (done) => {
  const key = 'fake_key'

  const fakeKiwis = [
    {name: 'Kumura'}
  ]

  const scope = nock('http://localhost:80')
  .get('/_api/v1/kiwis/my')
  .query({userKey: 'fake_key'})
  .reply(200, fakeKiwis)

  const dispatch = jest.fn()
    .mockImplementationOnce(kiwis => {
       expect(kiwis).toEqual(fakeKiwis)
       scope.done()
       done()
     })

  getMyKiwis(key)(dispatch)

})
