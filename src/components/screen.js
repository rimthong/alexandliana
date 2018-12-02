import React from 'react'
import PropTypes from 'prop-types'

const Screen = ({ id, children, image }) => (
  <div
    id={id}
    style={{
      margin: '0 auto',
      backgroundImage: `url(${image})`,
      height: '100%',
      width: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    }}
  >
    {children}
  </div>
)

Screen.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Screen
