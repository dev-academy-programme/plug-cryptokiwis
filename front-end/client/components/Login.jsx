import React from 'react'
import {connect} from 'react-redux'

import {saveKey} from '../actions/key'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      key: ''
    }
  }
  updateDetails(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()
    this.props.login(this.state.key)
    this.props.history.push('/')
  }
  render() {
    return <div className="section has-text-centered">
      <h2 className="title is-2">Login</h2>
      <form className="columns is-centered" onSubmit={this.onSubmit.bind(this)}>
        <div className="column is-6">
          <label className="label is-large">
            Paste your Key here:
            <input name="key" className="input is-large" onChange={this.updateDetails.bind(this)} />
            <input type="submit" className="button is-success is-large is-fullwidth" value="Login"/>
          </label>
        </div>
      </form>
    </div>
  }
}

const mapDispatchToProps = dispatch => ({
  login: key => dispatch(saveKey(key))
})

export default connect(null, mapDispatchToProps)(Login)
