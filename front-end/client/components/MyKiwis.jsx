import React from 'react'
import {connect} from 'react-redux'

import KiwiList from './KiwiList'

const MyKiwis = ({myKiwis}) => {

  return <div className="section has-text-centered">
    <h2 className="title is-2">My Kiwis</h2>
    <hr />
    <KiwiList kiwis={myKiwis} />
  </div>
}

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(MyKiwis)
