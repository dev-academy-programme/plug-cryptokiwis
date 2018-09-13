import request from 'superagent'
import endpoint from './endpoint'

import {
  receiveMyKiwis
} from '../actions/myKiwis'

export const getMyKiwis = userKey =>
  dispatch => {
    request
      .get(`${endpoint}kiwis/my`)
      .query({userKey})
      .then(res => {
        dispatch(receiveMyKiwis(res.body))
      })
      .catch(err => console.error(err))
  }
