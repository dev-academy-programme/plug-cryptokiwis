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

import Account from '@plugjs/account'
import Client from '@plugjs/client'
import plug from '@plugjs/core'
import Transform from '@plugjs/transform'
import ProviderHttp from '@plugjs/provider-http'
import Transaction, { sign, verify, serializeTransaction } from '@plugjs/transaction'

const http = new ProviderHttp('http://localhost:8181')

const account = new Account()

// The Plug constructor can accept an object with the values
const config = {
  apiHttp: 'http://localhost:8181',
  account
}

const plugClient = new Client(config)

export const claimKiwi = (claimer, kiwi_id, cb) =>
  dispatch => {
    console.log({claimer});
    const transform = {
      _fqdn: 'cryptokiwi.GainKiwi',
      claimer,
      kiwi_id
    }
    plugClient.createTransaction(transform)
    .then(transaction => {
      plugClient.sendTransaction(transaction)
        .then(response => {
          cb()
          setTimeout(() => {
            dispatch(getUnclaimedKiwis())
            dispatch(getMyKiwis(claimer))
            dispatch(getAllKiwis())
          }, 1000)
        })
    })
  }


export const getUnclaimedKiwis = () =>
  dispatch => {
    const model = "cryptokiwi.KiwiCollectionModel"
    const indexer = "cryptokiwi.KiwiUnclaimedIndexer"
    request
      .get(`${endpoint}query/${model}/${indexer}/_all`)
      .then(res => {
        console.log("unclaimed", res);
        const kiwis = formatKiwis(res.body.payload.values)
        dispatch(receiveUnclaimedKiwis(kiwis))
      })
      .catch(err => {
        console.log("unclaimed err", err);
      })
  }

export const getAllKiwis = () =>
  dispatch => {
    const model = "cryptokiwi.KiwiModel"
    const indexer = "cryptoKiwi.KiwiIndexer"
    request
      .get(`${endpoint}query/${model}/${indexer}/_all`)
      .then(res => {
        console.log("all", res);
        const kiwis = formatKiwis(res.body.payload)
        dispatch(receiveAllKiwis(kiwis))
      })
      .catch(err => {
        console.log("all err", err);
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
      })
  }
