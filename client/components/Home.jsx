import React from 'react'
import {connect} from 'react-redux'

const Home = () => {
  return <div className="section">
    <h2 className="title is-2">Home</h2>
  </div>
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps)(Home)
