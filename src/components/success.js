import React from 'react'
import Layout from './layout'
import Screen from './screen'
import rsvpbg from '../images/rsvp.jpg'

const Success = ({lang}) => (
  <Layout>
    <Screen image={rsvpbg}>
      <h1 style={{ fontSize: '3.5rem' }}>Thank you</h1>
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
        <p>Thank you for RSVPing, see you soon!</p>
      </div>
    </Screen>
  </Layout>
)

export default Success
