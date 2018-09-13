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

export const getAllKiwis = userKey =>
  dispatch => {
    request
      .get(`${endpoint}kiwis`)
      .query({userKey})
      .then(res => {
        dispatch(receiveAllKiwis(res.body))
      })
      .catch(err => dispatch(receiveAllKiwis(allKiwis)))
  }

export const getMyKiwis = userKey =>
  dispatch => {
    request
      .get(`${endpoint}kiwis/my`)
      .query({userKey})
      .then(res => {
        dispatch(receiveMyKiwis(res.body))
      })
      .catch(err => dispatch(receiveMyKiwis(myKiwis)))
  }
