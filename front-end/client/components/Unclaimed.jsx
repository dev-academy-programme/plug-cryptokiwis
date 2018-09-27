import React from 'react'
import {connect} from 'react-redux'

import KiwiPreview from './KiwiPreview'
import KiwiList from './KiwiList'

const Browse = ({unclaimedKiwis, history}) => {
  return <div className="section has-text-centered">
    <h2 className="title is-2">Unclaimed Kiwis</h2>
    <hr />
    <KiwiList kiwis={unclaimedKiwis} history={history} />
  </div>
}

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(Browse)
