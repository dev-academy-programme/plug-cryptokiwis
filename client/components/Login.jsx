import React from 'react'
import {connect} from 'react-redux'

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
    this.props.dispatch({
      type: 'SAVE_KEY',
      key: this.state.key
    })
  }
  render() {
    return <div className="section has-text-centered">
      <h2 className="title is-2">Login</h2>
      <form className="columns is-centered">
        <div className="column is-6">
          <label className="label is-large">
            Paste your Key here:
            <input className="input is-large" onChange={this.updateDetails.bind(this)} />
            <input type="submit" className="button is-success is-large is-fullwidth" value="Login"/>
          </label>
        </div>
      </form>
    </div>
  }
}

export default connect()(Login)
