import React from 'react'
import Screen from './screen'
import georgesbg from '../images/georges.jpg'

const Details = ({lang}) => (
  <Screen id="details" image={georgesbg}>
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          padding: '25px',
          maxWidth: '472px',
        }}
      >
        <h1
          style={{
            transform: 'rotate(-20deg)',
            fontSize: '3.5rem',
            textAlign: 'center',
            marginBottom: '70px',
          }}
        >
          Join us <br /> for Brunch!
        </h1>
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
);

export default Details;
