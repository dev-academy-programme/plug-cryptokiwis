import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'

import '../sass/styles.scss'

const App = () => (
  <div className="container">
    <Router>
      <React.Fragment>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
      </React.Fragment>
    </Router>
  </div>
)

export default App
