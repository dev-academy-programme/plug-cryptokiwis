import request from 'superagent'
import endpoint from './endpoint'

import {
  receiveIncomingDanceOffRequests, receiveOutgoingDanceOffRequests
} from '../actions/danceOff'

//DELET THIS
import {
  danceOffRequestsIncoming,
  danceOffRequestsOutgoing
} from '../mocking'

export const getIncomingDanceOffRequests = userKey =>
  dispatch => {
    request
      .get(`${endpoint}danceoff/incoming`)
      .query({userKey})
      .then(res => {
        dispatch(receiveIncomingDanceOffRequests(res.body))
      })
      .catch(err => dispatch(receiveIncomingDanceOffRequests(danceOffRequestsIncoming)))
  }

export const getOutgoingDanceOffRequests = userKey =>
  dispatch => {
    request
      .get(`${endpoint}danceoff/outgoing`)
      .query({userKey})
      .then(res => {
        dispatch(receiveOutgoingDanceOffRequests(res.body))
      })
      .catch(err => dispatch(receiveOutgoingDanceOffRequests(danceOffRequestsOutgoing)))
  }
