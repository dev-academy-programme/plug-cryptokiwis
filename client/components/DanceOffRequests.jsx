import React from 'react'
import {connect} from 'react-redux'

import DanceOffRequest from './DanceOffRequest'

class DanceOffRequests extends React.Component {
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
    const {danceOffRequestsIncoming, danceOffRequestsOutgoing} = this.props
    return <div className="section has-text-centered">
      <h2 className="title is-2">Breeding Requests</h2>
      <hr />
      {danceOffRequestsIncoming.length > 0
        ? <button onClick={()=>this.toggleShow('showIncoming')} className={`button is-large is-fullwidth  column is-6 is-offset-3 is-${showIncoming ? 'warning': 'info'}`}>
          {showIncoming ? 'Hide Incoming Requests' : 'View Incoming Requests'}
          <span className="tag is-pulled-right is-danger">
            {danceOffRequestsIncoming.length}
          </span>
        </button>
        : <button onClick={()=>this.toggleShow('showIncoming')} className="button is-large is-fullwidth column is-6 is-offset-3 is-info" disabled>
          No Incoming Breeding Requests
        </button>
      }
      {showIncoming && <div>
        {danceOffRequestsIncoming.map((request, i) => <DanceOffRequest request={request} key={i} isIncoming={true} />)}
      </div>}
      <hr />
      {danceOffRequestsOutgoing.length > 0
        ? <button onClick={()=>this.toggleShow('showOutgoing')} className={`button is-large is-fullwidth  column is-6 is-offset-3 is-${showOutgoing ? 'warning': 'info'}`}>
          {showOutgoing ? 'Hide Outgoing Requests' : 'View Outgoing Requests'}
          <span className="tag is-pulled-right is-danger">
            {danceOffRequestsOutgoing.length}
          </span>
        </button>
        : <button className="button is-large is-fullwidth column is-6 is-offset-3 is-info" disabled>
          No Outgoing Breeding Requests
        </button>
      }
      {showOutgoing && <div>
        {danceOffRequestsOutgoing.map((request, i) => <DanceOffRequest request={request} key={i} isIncoming={false} />)}
      </div>}
    </div>
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DanceOffRequests)
