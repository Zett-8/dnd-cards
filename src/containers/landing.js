import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class LandingPageContainer extends React.Component {
  render() {
    return (
      <div>
        <Link to="vertical">simple vertical list</Link>
      </div>
    )
  }
}

export default connect(null, null)(LandingPageContainer)
