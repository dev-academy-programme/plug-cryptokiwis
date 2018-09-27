import React from 'react'
import {connect} from 'react-redux'

import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import MyKiwis from './MyKiwis'
import Browse from './Browse'
import Unclaimed from './Unclaimed'
import BreedingRequests from './BreedingRequests'
import DanceOffRequests from './DanceOffRequests'

import * as danceOffApi from '../api/danceOff'
import * as breedingApi from '../api/breeding'
import {
  addIncomingDanceOffRequest,
  addOutgoingDanceOffRequest
} from '../actions/danceOff'
import {
  addIncomingBreedingRequest,
  addOutgoingBreedingRequest
} from '../actions/breeding'

import {
  getMyKiwis,
  getAllKiwis,
  getUnclaimedKiwis
} from '../api/kiwis'

import {
  addKiwi,
  addMyKiwi
} from '../actions/kiwis'

import '../sass/styles.scss'

export class App extends React.Component {
  componentDidMount() {
    const {
      fetchMyData,
      myKey,
      arrangeSockets,
      getKiwis
    } = this.props
    if (!!myKey) fetchMyData(myKey)
    getKiwis()
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (!!this.props.myKey && !prevProps.myKey) this.props.fetchMyData(this.props.myKey)
    return null
  }
  render() {
    const {myKey, myKiwis, unclaimedKiwis} = this.props
    return <div className="container">
      <Router>
        <React.Fragment>
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Home} />
          {!myKey && <Route exact path="/login" component={Login} />}
          {!!myKey && <Route exact path="/mykiwis" component={MyKiwis} />}
          {!!myKey && myKiwis.length == 0 && unclaimedKiwis.length > 0 && <Route exact path="/unclaimed" component={Unclaimed} />}
          <Route exact path="/browse" component={Browse} />
          {!!myKey && <Route path="/breeding" component={BreedingRequests} />}
          {!!myKey && <Route path="/dancing" component={DanceOffRequests} />}
        </React.Fragment>
      </Router>
    </div>
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  fetchMyData: myKey => {
    dispatch(danceOffApi.getIncomingDanceOffRequests(myKey))
    dispatch(danceOffApi.getOutgoingDanceOffRequests(myKey))
    dispatch(breedingApi.getIncomingBreedingRequests(myKey))
    dispatch(breedingApi.getOutgoingBreedingRequests(myKey))
    dispatch(getMyKiwis(myKey))
    dispatch(getAllKiwis(myKey))
  },
  getKiwis: () => {
    dispatch(getUnclaimedKiwis())
    dispatch(getAllKiwis())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
