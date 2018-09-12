import React from 'react'
import {connect} from 'react-redux'

import KiwiPreview from './KiwiPreview'

const AvailableKiwis = ({availableKiwis}) => {
  return <div className="section has-text-centered">
    <h2 className="title is-2">Grab a 1st Generation Kiwi</h2>
    <hr />
    {availableKiwis.length > 0
      ? <div className="columns is-multiline is-centered">
        {availableKiwis.map((kiwi, i) => <KiwiPreview key={i} kiwi={kiwi} />)}
      </div>
      : <div>
        <h2 className="subtitle is-2">Sorry! All generation 1 Kiwis have been grabbed!</h2>
      </div>
    }
  </div>
}

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(AvailableKiwis)
