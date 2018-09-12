import React from 'react'
import {connect} from 'react-redux'

import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import MyKiwis from './MyKiwis'
import Browse from './Browse'

import '../sass/styles.scss'

const App = ({key}) => (
  <div className="container">
    <Router>
      <React.Fragment>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        {!key && <Route exact path="/login" component={Login} />}
        {!!key && <Route exact path="/mykiwis" component={MyKiwis} />}
        <Route exact path="/browse" component={Browse} />
      </React.Fragment>
    </Router>
  </div>
)

const mapStateToProps = state => state

export default connect(mapStateToProps)(App)
