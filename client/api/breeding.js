import request from 'superagent'
import endpoint from './endpoint'

import {
  receiveIncomingBreedingRequests, receiveOutgoingBreedingRequests
} from '../actions/breeding'

export const getIncomingBreedingRequests = userKey =>
  dispatch => {
    request
      .get(`${endpoint}breeding/incoming`)
      .query({userKey})
      .then(res => {
        dispatch(receiveIncomingBreedingRequests(res.body))
      })
      .catch(err => console.error(err))
  }

export const getOutgoingBreedingRequests = userKey =>
  dispatch => {
    request
      .get(`${endpoint}breeding/outgoing`)
      .query({userKey})
      .then(res => {
        dispatch(receiveOutgoingBreedingRequests(res.body))
      })
      .catch(err => console.error(err))
  }
