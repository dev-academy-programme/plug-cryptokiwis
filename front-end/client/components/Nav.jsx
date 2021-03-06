import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {logout} from '../actions/key'

export const Nav = ({myKey, unclaimedKiwis, myKiwis, logout}) => {
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
        {!!myKey && myKiwis.length > 0 && <div className="navbar-item">
          <Link to="/mykiwis" className="button is-info">
            My Kiwis
          </Link>
        </div>}
        {!!myKey && myKiwis.length == 0 && unclaimedKiwis.length > 0 &&  <div className="navbar-item">
          <Link to="/unclaimed" className="button is-info">
            Grab a Kiwi
          </Link>
        </div>}

        <div className="navbar-item">
          <Link to="/browse" className="button is-warning">
            Browse
          </Link>
        </div>
        {!!myKey && <div className="navbar-item">
          <Link to="/breeding" className="button is-success">
            Breeding
          </Link>
        </div>}
        {!myKey && <div className="navbar-item">
          <Link to="/login" className="button is-info">
            Login
          </Link>
        </div>}
        {!!myKey && <div className="navbar-item">
          <Link to="/dancing" className="button is-danger">
            Dance Off
          </Link>
        </div>}
        {!!myKey && <div className="navbar-item">
          <Link to="/" onClick={() => logout()} className="button is-dark">
            Logout
          </Link>
        </div>}
      </div>
    </div>
  </div>
}

const mapStateToProps = (state) => (state)

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
