import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class LandingPageContainer extends React.Component {
  render() {
    return (
      <Wrapper>
        <HoverLink to="vertical">simple vertical list</HoverLink>
        <HoverLink to="horizontal">horizontal dnd with multiple vertical list</HoverLink>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;

  height: 100vh;
`

const HoverLink = styled(Link)`
  display: grid;
  justify-content: center;
  align-content: center;

  width: 100%;
  height: 100%;

  font-size: 13px;
  color: black;

  :hover {
    background: darkgrey;
  }
`

export default connect(null, null)(LandingPageContainer)
