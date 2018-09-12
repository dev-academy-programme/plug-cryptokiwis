import React from 'react'
import {connect} from 'react-redux'

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
  render() {
    const {showStats} = this.state
    const {isIncoming, request, kiwis, myKiwis} = this.props
    console.log({request, kiwis, myKiwis});
    const {sender, receiver, sender_kiwi_id, receiver_kiwi_id} = request
    const senderKiwi = (isIncoming ? kiwis : myKiwis)
      .find(kiwi => kiwi.id == sender_kiwi_id)
    const receiverKiwi = (isIncoming ? myKiwis : kiwis)
      .find(kiwi => kiwi.id == receiver_kiwi_id)
    console.log({senderKiwi, receiverKiwi});
    return <div>{senderKiwi.name} -> {receiverKiwi.name}</div>
  }
}

const mapStateToProps = state => state


export default connect(mapStateToProps)(BreedingRequest)
