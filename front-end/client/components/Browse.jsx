import React from 'react'
import {connect} from 'react-redux'

import KiwiPreview from './KiwiPreview'
import KiwiList from './KiwiList'

const Browse = ({kiwis, myKiwis}) => {

  return <div className="section has-text-centered">
    <h2 className="title is-2">Browse Kiwis</h2>
    <hr />
    <KiwiList kiwis={kiwis.filter(kiwi => !myKiwis.find(other => other.id == kiwi.id))} />
  </div>
}

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(Browse)
