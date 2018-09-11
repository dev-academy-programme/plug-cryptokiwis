import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Home = ({key, availableKiwis, myKiwis}) => {
  console.log({key, availableKiwis});
  return <div className="section has-text-centered">
    <h2 className="title is-2">Welcome to Crypto Kiwis!</h2>
    <hr />
    <div className="columns is-centered">
      <div className="column is-6">
        {!key && <Link to="/login" className="button   is-fullwidth is-large is-info">
          Login
        </Link>}
        {!key && <Link to="/register" className="button is-fullwidth is-large is-success">
          Register
        </Link>}
        {!!key && <Link to="/" className="button is-large is-fullwidth is-info">
          My Kiwis
        </Link>}
        {availableKiwis.length > 0 && myKiwis.length == 0 && <Link to="/grab" className="button is-large is-fullwidth is-warning has-text-dark">
          Grab a Kiwi
        </Link>}
        <Link to="/browse" className="button is-large is-fullwidth is-danger has-text-dark">
          Browse Kiwis
        </Link>
      </div>
    </div>
  </div>
}

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(Home)
