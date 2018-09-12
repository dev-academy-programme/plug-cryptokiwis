import React from 'react'
import {connect} from 'react-redux'
import KiwiPreview from './KiwiPreview'

function KiwiList ({kiwis}) {
  return (
    <div className="columns is-multiline is-centered">
      {kiwis.map((kiwi, i) => <KiwiPreview key={i} kiwi={kiwi} />)}
    </div>
  )
}

export default connect()(KiwiList)
