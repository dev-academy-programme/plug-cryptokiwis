import React from 'react'
import Link from 'react-router-dom'
import {connect} from 'react-redux'

import KiwiImage from './KiwiImage'

import {Router, Route} from 'react-router-dom'

import names from '../names'

const KiwiPreview = ({kiwi, deselect, myKiwis}) => {
  const {
    name,
    size,
    colour,
    strength,
    cuteness,
    speed
  } = kiwi
  const translation = `${names[name.split(' ')[0]]} - ${names[name.split(' ')[1]]}`
  
  return <div className="column is-12 box has-text-centered">
    <div className="level">
      <div>
        <h3 className="title is-1">{name}</h3>
        <h4 className="subtitle is-1">{translation}</h4>
      </div>
      <span className="delete" onClick={()=>deselect(kiwi)}></span>
    </div>
    <div className="columns is-centered">
      <div className="column is-6">
        <KiwiImage colour={colour} size={size * 2} />
      </div>
      <div className="column is-6">
        <table className="table is-large is-fullwidth has-text-centered">
          <thead>
            <tr>
              <th>Trait</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Colour</b></td>
              <td>{colour}</td>
            </tr>
            <tr>
              <td><b>Size</b></td>
              <td>{size}</td>
            </tr>
            <tr></tr>
            <tr>
              <td><b>Speed</b></td>
              <td>{speed}</td>
            </tr>
            <tr>
              <td><b>Strength</b></td>
              <td>{strength}</td>
            </tr>
            <tr>
              <td><b>Cuteness</b></td>
              <td>{cuteness}</td>
            </tr>
          </tbody>
        </table>

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
