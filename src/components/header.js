import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => (
  <nav
    data-scroll-header
    style={{
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      width: '100%',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.0rem 1.0rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <AnchorLink className="nav-link" href="#home">
        Home
      </AnchorLink>
      <AnchorLink className="nav-link" href="#details">
        Details
      </AnchorLink>
      <AnchorLink className="nav-link" href="#rsvp">
        RSVP
      </AnchorLink>
    </div>
  </nav>
)

export default Header
