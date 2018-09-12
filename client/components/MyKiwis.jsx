import React from 'react'
import {connect} from 'react-redux'

const MyKiwis = ({myKiwis}) => {

  return <div className="section has-text-centered">
    <h2 className="title is-2">My Kiwis</h2>
    <hr />
    <div className="columns is-multiline is-centered">
      {myKiwis.map((kiwi, i) => <KiwiPreview key={i} kiwi={kiwi} />)}
    </div>
  </div>
}

const mapStateToProps = (state) => (state)

export default connect()(MyKiwis)
