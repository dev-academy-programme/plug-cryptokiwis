import React from 'react'
import Link from 'react-router-dom'
import {connect} from 'react-redux'

import KiwiImage from './KiwiImage'
import KiwiStatTable from './KiwiStatTable'

import {Router, Route} from 'react-router-dom'

import names from '../names'

const KiwiPreview = ({kiwi, deselect, myKiwis}) => {
  const {
    name,
    size,
    colour,
    id
  } = kiwi
  const translation = `${names[name.split(' ')[0]]} - ${names[name.split(' ')[1]]}`
  return <div onClick={() => deselect(kiwi)} className="column is-12 box has-text-centered">
    <h3 className="title is-1">{name}</h3>
    <h4 className="subtitle is-1">{translation}</h4>
    <h4 className="subtitle is-2">ID: {id}</h4>
    <div className="columns is-centered">
      <div className="column is-6">
        <KiwiImage kiwi={{...kiwi, size: kiwi.size * 2}} />
      </div>
      <div className="column is-6">
        <KiwiStatTable kiwi={kiwi} />
      </div>
    </div>
    <Route path="/grab" render={(props) => <div className="has-text-centered">
      {myKiwis.length == 0
        ? <button className="button is-large is-fullwidth is-success">Adopt this Kiwi (Limit 1)</button>
        : <button disabled className="button is-large is-fullwidth is-danger">You already own a Kiwi</button>
      }
    </div>} />
  </div>
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  deselect: kiwi => dispatch({
    type: 'DESELECT_KIWI',
    kiwi
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(KiwiPreview)
