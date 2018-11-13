import React from 'react'
import Layout from './layout'
import Screen from './screen'
import rsvpbg from '../images/rsvp.jpg'

const t = {
  en: {
    title: "Thank you!",
    text: "Thank you for RSVPing, see you soon!",
  },
  fr: {
    title: "Merci!",
    text: "Merci pour la réservation, à bientôt!",
  },
};

const Success = ({lang}) => (
  <Layout lang={lang} menu={false}>
    <Screen image={rsvpbg}>
      <h1 style={{ fontSize: '3.5rem' }}>{t[lang].title}</h1>
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: '10px 50px',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <p>{t[lang].text}</p>
      </div>
    </Screen>
  </Layout>
)

export default Success
