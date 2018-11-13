import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const t = {
  en: {
    home: "Home",
    details: "Details",
    rsvp: "RSVP",
  },
  fr: {
    home: "Accueil",
    details: "Détails",
    rsvp: "Réserver",
  },
};

const Header = ({lang = 'en'}) => (
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
        {t[lang].home}
      </AnchorLink>
      <AnchorLink className="nav-link" href="#details">
        {t[lang].details}
      </AnchorLink>
      <AnchorLink className="nav-link" href="#rsvp">
        {t[lang].rsvp}
      </AnchorLink>
    </div>
  </nav>
)

export default Header
