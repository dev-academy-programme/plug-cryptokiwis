import React from 'react'
import Link from 'react-router-dom'
import {connect} from 'react-redux'

import KiwiImage from './KiwiImage'
import FullKiwiView from './FullKiwiView'

const KiwiPreview = ({kiwi, selectedKiwis, select}) => {
  const {name, size, colour} = kiwi
  if (selectedKiwis.find(selected => selected == kiwi)) return <FullKiwiView kiwi={kiwi} />
  return <div className="column is-3 box" onClick={()=>select(kiwi)}>
    <h3 className="title is-3">{name}</h3>
    <KiwiImage kiwi={kiwi} />
  </div>
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  select: kiwi => dispatch({
    type: 'SELECT_KIWI',
    kiwi
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(KiwiPreview)
