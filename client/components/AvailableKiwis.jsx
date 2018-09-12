import React from 'react'
import {connect} from 'react-redux'

import KiwiPreview from './KiwiPreview'

const AvailableKiwis = ({availableKiwis}) => {
  return <div className="section has-text-centered">
    <h2 className="title is-2">Grab a Kiwi</h2>
    <hr />
    <div className="columns is-multiline is-centered">
      {availableKiwis.map((kiwi, i) => <KiwiPreview key={i} kiwi={kiwi} />)}
    </div>
  </div>
}

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(AvailableKiwis)
