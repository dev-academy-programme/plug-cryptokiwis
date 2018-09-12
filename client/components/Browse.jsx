import React from 'react'
import {connect} from 'react-redux'

import KiwiPreview from './KiwiPreview'

const Browse = ({kiwis}) => {

  return <div className="section has-text-centered">
    <h2 className="title is-2">Browse Kiwis</h2>
    <hr />
    <div className="columns is-multiline is-centered">
      {kiwis.map((kiwi, i) => <KiwiPreview key={i} kiwi={kiwi} />)}
    </div>
  </div>
}

const mapStateToProps = (state) => (state)

export default connect()(Browse)
