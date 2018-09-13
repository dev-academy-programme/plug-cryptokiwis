import React from 'react'
import {connect} from 'react-redux'

import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import MyKiwis from './MyKiwis'
import Browse from './Browse'
import BreedingRequests from './BreedingRequests'
import DanceOffRequests from './DanceOffRequests'

import * as danceOffApi from '../api/danceOff'
import * as breedingApi from '../api/breeding'

import {
  getMyKiwis,
  getAllKiwis
} from '../api/kiwis'
import {
  addKiwi,
  addMyKiwi
} from '../actions/kiwis'

import '../sass/styles.scss'

class App extends React.Component {
  componentDidMount() {
    const {
      fetchMyData,
      myKey,
      socket,
      arrangeSockets
    } = this.props
    if (!!myKey) fetchMyData(myKey)
    socket.on('newKiwi', kiwi => d)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (!!this.props.myKey && !prevProps.myKey) this.props.fetchMyData(this.props.myKey)
  }
  render() {
    const {myKey} = this.props
    return <div className="container">
      <Router>
        <React.Fragment>
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Home} />
          {!myKey && <Route exact path="/login" component={Login} />}
          {!!myKey && <Route exact path="/mykiwis" component={MyKiwis} />}
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
    console.log("fetching data");
    dispatch(danceOffApi.getIncomingDanceOffRequests(myKey))
    dispatch(danceOffApi.getOutgoingDanceOffRequests(myKey))
    dispatch(breedingApi.getIncomingBreedingRequests(myKey))
    dispatch(breedingApi.getOutgoingBreedingRequests(myKey))
    dispatch(getMyKiwis(myKey))
    dispatch(getAllKiwis(myKey))
  },
  arrangeSockets: socket => {
    socket.on('addKiwi', kiwi => dispatch(addKiwi(kiwi))),
    socket.on('addMyKiwi', kiwi => dispatch(addMyKiwi(kiwi)))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
