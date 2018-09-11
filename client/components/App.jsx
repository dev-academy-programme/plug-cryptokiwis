import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import Register from './Register'

import '../sass/styles.scss'

const App = () => (
  <div className="container">
    <Router>
      <React.Fragment>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </React.Fragment>
    </Router>
  </div>
)

export default App
