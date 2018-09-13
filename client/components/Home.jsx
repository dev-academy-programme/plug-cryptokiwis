import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Home = ({myKey, myKiwis}) => {
  return <div className="section has-text-centered">
    <h2 className="title is-2">Welcome to Crypto Kiwis!</h2>
    <hr />
    <div className="columns is-centered">
      <div className="column is-6">
        {!myKey && <Link to="/login" className="button   is-fullwidth is-large is-info">
          Login
        </Link>}
        {!!myKey && <Link to="/mykiwis" className="button is-large is-fullwidth is-info">
          My Kiwis
        </Link>}
        <Link to="/browse" className="button is-large is-fullwidth is-warning has-text-dark">
          Browse Kiwis
        </Link>
        {!!myKey && <Link to="/breeding" className="button is-large is-fullwidth is-success">
          Breeding Requests
        </Link>}
        <Link to="/dancing" className="button is-large is-fullwidth is-danger has-text-dark">
          Dance Off
        </Link>
      </div>
    </div>
  </div>
}

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(Home)
