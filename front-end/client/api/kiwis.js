import request from 'superagent'
import endpoint from './endpoint'
import formatKiwis from '../format_kiwis'

import {
  receiveAllKiwis,
  receiveMyKiwis,
  receiveUnclaimedKiwis
} from '../actions/kiwis'

import {
  myKiwis,
  allKiwis
} from '../mocking'


export const getUnclaimedKiwis = () =>
  dispatch => {
    const model = "cryptokiwi.KiwiCollectionModel"
    const indexer = "cryptokiwi.KiwiUnclaimedIndexer"
    request
      .get(`${endpoint}query/${model}/${indexer}/_unclaimed`)
      .then(res => {
        console.log({res});
        const kiwis = formatKiwis(res.body.payload)
        dispatch(receiveUnclaimedKiwis(kiwis))
      })
      .catch(err => {
        console.log({err});
        dispatch(receiveUnclaimedKiwis(allKiwis))
      })
  }

export const getAllKiwis = () =>
  dispatch => {
    const model = "cryptokiwi.KiwiModel"
    const indexer = "cryptoKiwi.KiwiIndexer"
    request
      .get(`${endpoint}query/${model}/${indexer}/_all`)
      .then(res => {
        const kiwis = formatKiwis(res.body.payload)
        dispatch(receiveAllKiwis(kiwis))
      })
      .catch(err => {
        dispatch(receiveAllKiwis(allKiwis))
      })
  }

export const getMyKiwis = userKey =>
  dispatch => {
    const model = "cryptokiwi.KiwiModel"
    const indexer = "cryptoKiwi.KiwiIndexer"
    request
      .get(`${endpoint}query/${model}/${indexer}/${userKey}`)
      .then(res => {
        const kiwis = formatKiwis(res.body.payload)
        dispatch(receiveMyKiwis(kiwis))
      })
      .catch(err => {
        dispatch(receiveMyKiwis(myKiwis))
      })
  }
