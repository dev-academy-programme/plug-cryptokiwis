import request from 'superagent'
import endpoint from './endpoint'

import {
  receiveIncomingDanceOffRequests, receiveOutgoingDanceOffRequests
} from '../actions/danceOff'

export const getIncomingDanceOffRequests = userKey =>
  dispatch => {
    request
      .get(`${endpoint}danceoff/incoming`)
      .query({userKey})
      .then(res => {
        dispatch(receiveIncomingDanceOffRequests(res.body))
      })
      .catch(err => console.error(err))
  }

export const getOutgoingDanceOffRequests = userKey =>
  dispatch => {
    request
      .get(`${endpoint}danceoff/outgoing`)
      .query({userKey})
      .then(res => {
        dispatch(receiveOutgoingDanceOffRequests(res.body))
      })
      .catch(err => console.error(err))
  }
