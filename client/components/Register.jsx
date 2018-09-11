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
    this.showKey('Iamafakekeyandhereissomemoretexttomakethiskeyseemlonger')
  }
  copyToClipboard() {
    const copyText = document.getElementById("gennedKey");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
  render() {
    const {showKey, key} = this.state

    return <div className="section has-text-centered">
      <h2 className="title is-2">Register</h2>
      <div className="columns is-centered">
        <div className="column is-6">
          {showKey
            ? <span>
              <label className="label is-large">
                Be sure to save this key somewhere!
                <input type="text" id="gennedKey" className="input is-success is-large has-text-info" value={key} />
              </label>
              <button className="button is-large is-fullwidth is-info" onClick={this.copyToClipboard.bind(this)}>Copy to Clipboard</button>
            </span>
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
