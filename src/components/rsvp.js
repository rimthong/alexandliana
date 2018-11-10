import React from 'react'
import Screen from './screen'
import rsvpbg from '../images/rsvp.jpg'

const RSVP = ({lang}) => (
  <Screen id="rsvp" image={rsvpbg}>
    <h1 style={{ fontSize: '3.5rem' }}>Please RSVP</h1>
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
      <p>Please mention who will be attending, if you need parking, if you plan on staying at the hotel (we might be able to get a rate) or if you have food preferences or allergies.</p>
      <form name="rsvp" data-netlify={true} data-netlify-honeypot="bot-field" method="POST" style={{ justifyContent: 'center', textAlign: 'center' }} action="/success?no-cache=1">
        <input type="hidden" name="bot-field" />
        <div className="field half first">
          <label htmlFor="name">Name&nbsp;</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email&nbsp;</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message&nbsp;</label>
          <textarea name="message" id="message" rows="6"></textarea>
        </div>
        <button type="submit">RSVP!</button>
      </form>
    </div>
  </Screen>
);

export default RSVP;
