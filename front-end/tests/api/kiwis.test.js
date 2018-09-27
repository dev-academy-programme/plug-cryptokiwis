import nock from 'nock'

import {
  getAllKiwis,
  getMyKiwis
} from '../../client/api/kiwis'


jest.mock('../../client/actions/kiwis', () => ({
  receiveAllKiwis: kiwis => kiwis,
  receiveMyKiwis: kiwis => kiwis
}))

test.skip('getAllKiwis request', (done) => {
  const key = 'fake_key'

  const fakeKiwis = [
    {name: 'Kumura'}
  ]

  const scope = nock('http://localhost:8181')
  .get('_api/v1/query/cryptokiwi.KiwiModel/cryptoKiwi.KiwiIndexer/_all')
  .reply(200, fakeKiwis)

  const dispatch = jest.fn()
    .mockImplementationOnce(kiwis => {
       expect(kiwis).toEqual(fakeKiwis)
       scope.done()
       done()
     })

  getAllKiwis(key)(dispatch)

})

test.skip('getMyKiwis request', (done) => {
  const key = 'fake_key'

  const fakeKiwis = [
    {name: 'Kumura'}
  ]

  const scope = nock('http://localhost:8181')
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
