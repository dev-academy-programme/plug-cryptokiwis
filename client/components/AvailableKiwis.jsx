import React from 'react'
import {connect} from 'react-redux'

import KiwiPreview from './KiwiPreview'
import KiwiList from './KiwiList'

const AvailableKiwis = ({availableKiwis}) => {
  return <div className="section has-text-centered">
    <h2 className="title is-2">Grab a 1st Generation Kiwi</h2>
    <hr />
    {availableKiwis.length > 0
      ? <KiwiList kiwis={availableKiwis} />
      : <div>
        <h2 className="subtitle is-2">Sorry! All generation 1 Kiwis have been grabbed!</h2>
      </div>
    }
  </div>
}

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(AvailableKiwis)
