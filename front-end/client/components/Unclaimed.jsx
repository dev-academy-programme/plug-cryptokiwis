import React from 'react'
import {connect} from 'react-redux'

import KiwiPreview from './KiwiPreview'
import KiwiList from './KiwiList'

const Browse = ({unclaimedKiwis}) => {
  return <div className="section has-text-centered">
    <h2 className="title is-2">Unclaimed Kiwis</h2>
    <hr />
    <KiwiList kiwis={unclaimedKiwis} />
  </div>
}

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(Browse)
