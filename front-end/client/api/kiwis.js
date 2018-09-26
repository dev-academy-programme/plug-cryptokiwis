import request from 'superagent'
import endpoint from './endpoint'

import {
  receiveAllKiwis,
  receiveMyKiwis
} from '../actions/kiwis'

import {
  myKiwis,
  allKiwis
} from '../mocking'

export const getAllKiwis = () =>
  dispatch => {
    const model = "cryptokiwi.KiwiModel"
    const indexer = "cryptokiwi.KiwiIndexer"
    request
      .get(`${endpoint}kiwis/${model}/${indexer}/_all`)
      .then(res => {
        console.log({res});
        dispatch(receiveAllKiwis(res.body))
      })
      .catch(err => dispatch(receiveAllKiwis(allKiwis)))
  }

export const getMyKiwis = userKey =>
  dispatch => {
    const model = "cryptokiwi.KiwiModel"
    const indexer = "cryptokiwi.KiwiIndexer"
    request
      .get(`${endpoint}kiwis/${model}/${indexer}/${userKey}`)
      .then(res => {
        console.log({res});
        dispatch(receiveMyKiwis(res.body))
      })
      .catch(err => dispatch(receiveMyKiwis(myKiwis)))
  }
