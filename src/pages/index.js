import React from 'react'
import Layout from '../components/layout'
import Screen from '../components/screen'
import homebg from '../images/home.png'
import georgesbg from '../images/georges.jpg'
import rsvpbg from '../images/rsvp.jpg'

const IndexPage = () => (
  <Layout>
    <Screen id="home" image={homebg}>
      <svg viewBox="0 0 200 200">
        <path id="curve" d="M10 80 Q 95 10 180 80" />
        <text width="500" style={{fill: 'white', 'font-family': 'pacifico'}}>
          <textPath href="#curve">
            We're Getting Married!
          </textPath>
        </text>
      </svg>
      <h1>October 13th</h1>
      <h1>2019</h1>
    </Screen>
    <Screen id="details" image={georgesbg}>
      <div style={{
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'center',
        }}
      >
        <div
          style={{
            padding: '25px',
            'max-width': '472px',
          }}
        >
          <h1
            style={{
              transform: 'rotate(-20deg)',
              'font-size': '3.5rem',
              'text-align': 'center',
              'margin-bottom': '70px',
            }}
          >
            Join us <br /> for Brunch!
          </h1>
          <div
            style={{
              'background-color': 'rgba(0, 0, 0, 0.8)',
              padding: '10px',
            }}
          >
            <p>We'll be at Bar Georges, a lovely victorian mansion in the middle of downtown Montreal with an exquisite menu. Menu will have vegetarian options.</p>
            <ul>
              <li>Two blocks from Peel Metro.</li>
              <li>Parking included in wedding.</li>
              <li>Hotel on premise available.</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            'background-color': 'rgba(0, 0, 0, 0.8)',
            padding: '10px',
          }}
        >
          <div>
            <h2>October 13th</h2>
            <ul>
              <li>10:00am Reception</li>
              <li>11:00am Ceremony, followed by brunch!</li>
            </ul>
          </div>
          <div>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.543092049602!2d-73.57791038452005!3d45.49914493913222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a41975c7943%3A0xd36f5ad8ca917aa5!2sBar+George!5e0!3m2!1sen!2sca!4v1540177150840" width="400" height="400" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </Screen>
    <Screen id="rsvp" image={rsvpbg}>
      <h1 style={{ 'font-size': '3.5rem' }}>Please RSVP</h1>
      <div
        style={{
          'background-color': 'rgba(0, 0, 0, 0.8)',
          padding: '10px 50px',
          'justify-content': 'center',
          'align-items': 'center',
          'max-width': '1000px',
          'margin': '0 auto',
        }}
      >
        <p>Please mention who will be attending, if you need parking, if you plan on staying at the hotel (we might be able to get a rate) or if you have food preferences or allergies.</p>
        <form name="rsvp" data-netlify={true} data-netlify-honeypot="bot-field" style={{ 'justify-content': 'center', 'text-align': 'center' }}>
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
          <input type="submit" value="RSVP!" className="special" />
        </form>
      </div>
    </Screen>
  </Layout>
)

export default IndexPage
