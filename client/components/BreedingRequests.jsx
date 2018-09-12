import React from 'react'
import {connect} from 'react-redux'

import BreedingRequest from './BreedingRequest'

class BreedingRequests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showIncoming: false,
      showOutgoing: false
    }
  }
  toggleShow(key) {
    this.setState({
      [key]: !this.state[key]
    })
  }
  render() {
    const {showIncoming, showOutgoing} = this.state
    const {breedingRequestsIncoming, breedingRequestsOutgoing} = this.props
    return <div className="section has-text-centered">
      <h2 className="title is-2">Breeding Requests</h2>
      <hr />
      {breedingRequestsIncoming.length > 0
        ? <button onClick={()=>this.toggleShow('showIncoming')} className={`button is-large is-fullwidth  column is-6 is-offset-3 is-${showIncoming ? 'warning': 'info'}`}>
          {showIncoming ? 'Hide Incoming Requests' : 'View Incoming Requests'}
          <span className="tag is-pulled-right is-danger">
            {breedingRequestsIncoming.length}
          </span>
        </button>
        : <button onClick={()=>this.toggleShow('showIncoming')} className="button is-large is-fullwidth column is-6 is-offset-3 is-info" disabled>
          No Incoming Breeding Requests
        </button>
      }
      {showIncoming && <div>
        {breedingRequestsIncoming.map((request, i) => <BreedingRequest request={request} key={i} isIncoming={true} />)}
      </div>}
      <hr />
      {breedingRequestsOutgoing.length > 0
        ? <button onClick={()=>this.toggleShow('showOutgoing')} className={`button is-large is-fullwidth  column is-6 is-offset-3 is-${showOutgoing ? 'warning': 'info'}`}>
          {showOutgoing ? 'Hide Outgoing Requests' : 'View Outgoing Requests'}
          <span className="tag is-pulled-right is-danger">
            {breedingRequestsOutgoing.length}
          </span>
        </button>
        : <button className="button is-large is-fullwidth column is-6 is-offset-3 is-info" disabled>
          No Outgoing Breeding Requests
        </button>
      }
      {showOutgoing && <div>
        {breedingRequestsOutgoing.map((request, i) => <BreedingRequest request={request} key={i} isIncoming={false} />)}
      </div>}
    </div>
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(BreedingRequests)
