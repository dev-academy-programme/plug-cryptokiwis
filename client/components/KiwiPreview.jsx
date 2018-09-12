import React from 'react'
import Link from 'react-router-dom'
import {connect} from 'react-redux'

import KiwiImage from './KiwiImage'

const KiwiPreview = ({kiwi}) => {
  const {name, size, colour} = kiwi
  return <div className="column is-4 box">
    <h3 className="title is-3">{name}</h3>
    <KiwiImage colour={colour} size={size} />
  </div>
}

export default connect()(KiwiPreview)
