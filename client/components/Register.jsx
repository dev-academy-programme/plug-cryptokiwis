import React from 'react'
import {connect} from 'react-redux'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showKey: false,
      key: null
    }
  }
  showKey(key) {
    this.setState({
      showKey: true,
      key
    })
  }
  register() {
    this.showKey('Iamafakekey')
  }
  render() {
    const {showKey, key} = this.state

    return <div className="section has-text-centered">
      <h2 className="title is-2">Register</h2>
      <div className="columns is-centered">
        <div className="column is-6">
          {showKey
            ? <label className="label is-large">
              Be sure to save this key somewhere!
              <input type="text" className="input is-success is-large has-text-info" value={key} />
            </label>
            : <button className="button is-large is-fullwidth is-success" onClick={this.register.bind(this)}>
              Generate Key
            </button>
          }
        </div>
      </div>
    </div>
  }
}



export default connect()(Register)
