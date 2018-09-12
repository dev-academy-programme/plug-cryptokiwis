import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import MyKiwis from './MyKiwis'
import AvailableKiwis from './AvailableKiwis'
import Browse from './Browse'

import '../sass/styles.scss'

const App = () => (
  <div className="container">
    <Router>
      <React.Fragment>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mykiwis" component={MyKiwis} />
        <Route exact path="/grab" component={AvailableKiwis} />
        <Route exact path="/browse" component={Browse} />
      </React.Fragment>
    </Router>
  </div>
)

export default App
