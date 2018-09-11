import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Nav = ({key, availableKiwis, myKiwis}) => {
  const kiwi = <img className="nav-image" src="https://png.icons8.com/ios/1600/kiwi-bird-filled.png" />
  return <div className="navbar is-primary" role="navigation" aria-label="main navigation">
    <div className="navbar-start">
      <div className="navbar-brand section">
        <Link to="/" className="navbar-item">
          <h1 className="title is-1 has-text-info">
            {kiwi}
            {kiwi}
            {kiwi}
            Crypto Kiwis
            {kiwi}
            {kiwi}
            {kiwi}
          </h1>
        </Link>
      </div>
    </div>
    <div className="navbar-end">
      <div className="navbar-menu section">
        {!key && <div className="navbar-item">
          <Link to="/login" className="button is-large is-info">
            Login
          </Link>
        </div>}
        {!key && <div className="navbar-item">
          <Link to="/register" className="button is-large is-success">
            Register
          </Link>
        </div>}
        {!!key && <div className="navbar-item">
          <Link to="/" className="button is-large is-info">
            My Kiwis
          </Link>
        </div>}
        {availableKiwis.length > 0 && myKiwis.length == 0 && <div className="navbar-item">
          <Link to="/grab" className="button is-large is-warning">
            Grab a Kiwi
          </Link>
        </div>}
        <div className="navbar-item">
          <Link to="/browse" className="button is-large is-danger">
            Browse
          </Link>
        </div>
      </div>
    </div>
  </div>
}

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(Nav)
