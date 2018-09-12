import React from 'react'
import {connect} from 'react-redux'

import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import MyKiwis from './MyKiwis'
import Browse from './Browse'
import BreedingRequests from './BreedingRequests'

import '../sass/styles.scss'

const App = ({myKey}) => (
  <div className="container">
    {console.log({myKey})}
    <Router>
      <React.Fragment>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        {!myKey && <Route exact path="/login" component={Login} />}
        {!!myKey && <Route exact path="/mykiwis" component={MyKiwis} />}
        <Route exact path="/browse" component={Browse} />
        {!!myKey && <Route path="/requests" component={BreedingRequests} />}
      </React.Fragment>
    </Router>
  </div>
)

const mapStateToProps = state => state

export default connect(mapStateToProps)(App)
