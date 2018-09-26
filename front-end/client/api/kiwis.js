import request from 'superagent'
import endpoint from './endpoint'
import formatKiwis from '../format_kiwis'

import {
  receiveAllKiwis,
  receiveMyKiwis
} from '../actions/kiwis'

import {
  myKiwis,
  allKiwis
} from '../mocking'

const model = "cryptokiwi.KiwiModel"
const indexer = "cryptoKiwi.KiwiIndexer"

export const getAllKiwis = () =>
  dispatch => {
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
