import React from 'react'
import {connect} from 'react-redux'

import KiwiPreview from './KiwiPreview'
import KiwiList from './KiwiList'

const Browse = ({kiwis}) => {

  return <div className="section has-text-centered">
    <h2 className="title is-2">Browse Kiwis</h2>
    <hr />
    <KiwiList kiwis={kiwis} />
  </div>
}

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(Browse)
