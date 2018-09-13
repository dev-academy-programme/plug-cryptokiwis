import request from 'superagent'
import endpoint from './endpoint'

import {receiveAllKiwis} from '../actions/kiwis'

export const getAllKiwis = userKey =>
  dispatch => {
    request
      .get(`${endpoint}kiwis`)
      .query({userKey})
      .then(res => {
        dispatch(receiveAllKiwis(res.body))
      })
      .catch(err => console.error(err))
  }
