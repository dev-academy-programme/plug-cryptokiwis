import React from 'react'
import {connect} from 'react-redux'

import KiwiImage from './KiwiImage'
import KiwiStatTable from './KiwiStatTable'

class BreedingRequest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showStats: false
    }
  }
  toggleStats() {
    this.setState(({showStats}) => ({showStats: !showStats}))
  }
  renderKiwi(kiwi, isYours) {
    return <div className="column is-6 has-text-centered">
      <h3 className="title is-3">{kiwi.name}</h3>
      <h3 className="subtitle is-3">Owner: {isYours ? 'You' : 'Them'}</h3>
      <h4 className="subtitle is-4">ID: {kiwi.idgi}</h4>
      <div style={{height: '200px'}}>
        <KiwiImage kiwi={kiwi} />
      </div>
      {this.state.showStats && <KiwiStatTable kiwi={kiwi} isFlipped={!isYours} />}
    </div>
  }
  render() {
    const {showStats} = this.state
    const {isIncoming, request, kiwis, myKiwis} = this.props
    const {sender, receiver, sender_kiwi_id, receiver_kiwi_id} = request

    const senderKiwi = (isIncoming ? kiwis : myKiwis)
      .find(kiwi => kiwi.id == sender_kiwi_id)
    const receiverKiwi = (isIncoming ? myKiwis : kiwis)
      .find(kiwi => kiwi.id == receiver_kiwi_id)

    return <div className="box has-text-centered">
      <h3 className="title is-3">{isIncoming ? `<-- Request ID: ${request.id}` : `Request ID: ${request.id} -->`}</h3>
      <div className="columns is-mobile">
        {this.renderKiwi(isIncoming ? receiverKiwi : senderKiwi, true)}
        {this.renderKiwi(!isIncoming ? receiverKiwi : senderKiwi, false)}
      </div>
      <br />
      <button onClick={this.toggleStats.bind(this)} className="column is-6 is-offset-3 is-fullwidth button is-large is-success">{showStats ? "Show Less" : "Show More Info"}</button>
    </div>
  }
}

const mapStateToProps = state => state


export default connect(mapStateToProps)(BreedingRequest)
