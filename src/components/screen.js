import React from 'react'
import PropTypes from 'prop-types'

const Screen = ({ id, children, image }) => (
  <div
    id = {id}
    style={{
      margin: '0 auto',
      padding: '50px 200px',
      'background-image': `url(${image})`,
      height: '100%',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'center',
      'align-items': 'center',
      color: 'white',
    }}
  >
    {children}
  </div>
);

Screen.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Screen;
