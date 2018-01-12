import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MySpan = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 110%;
`

const Button = MySpan.withComponent('button')

const Link = ({ isActive, onClick, children }) =>
  isActive ? (
    <MySpan>{children}</MySpan>
  ) : (
    <Button onClick={onClick}>{children}</Button>
  )
Link.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

export default Link
