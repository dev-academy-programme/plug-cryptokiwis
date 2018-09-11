import React from 'react'

import {Link} from 'react-router-dom'

const Nav = (props) => {
  return <div className="navbar is-primary" role="navigation" aria-label="main navigation">
    <div className="navbar-start">
      <div className="navbar-brand section">
        <Link to="/" className="navbar-item">
          <h1 className="title is-1 has-text-info">
            <img className="nav-image" src="https://png.icons8.com/ios/1600/kiwi-bird-filled.png" />
            <img className="nav-image" src="https://png.icons8.com/ios/1600/kiwi-bird-filled.png" />
            <img className="nav-image" src="https://png.icons8.com/ios/1600/kiwi-bird-filled.png" />
            Crypto Kiwis
            <img className="nav-image" src="https://png.icons8.com/ios/1600/kiwi-bird-filled.png" />
            <img className="nav-image" src="https://png.icons8.com/ios/1600/kiwi-bird-filled.png" />
            <img className="nav-image" src="https://png.icons8.com/ios/1600/kiwi-bird-filled.png" />
          </h1>
        </Link>
      </div>
    </div>
    <div className="navbar-end">
      <div className="navbar-menu section">
        <div className="navbar-item">
          <button className="button is-large is-info">
            One
          </button>
        </div>
        <div className="navbar-item">
          <button className="button is-large is-info">
            Two
          </button>
        </div>
        <div className="navbar-item">
          <button className="button is-large is-info">
            Three
          </button>
        </div>
      </div>
    </div>
  </div>
}

export default Nav
