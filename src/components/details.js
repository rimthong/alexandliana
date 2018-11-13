import React from 'react'
import Screen from './screen'
import georgesbg from '../images/georges.jpg'

const t = {
  en: {
    title1: "Join us",
    title2: "for Brunch",
    description: "We'll be at Bar Georges, a lovely victorian mansion in the middle of downtown Montreal with an exquisite menu. Menu will have vegetarian options.",
    detail1: "Two blocks from Peel Metro.",
    detail2: "Parking included in wedding.",
    detail3: "Hotel on premise available.",
    when: "October 13th",
    whenDetail1: "10:00am Reception",
    whenDetail2: "11:00am Ceremony, followed by brunch!",
  },
  fr: {
    title1: "Vous êtes invités",
    title2: "Pour un brunch!",
    description: "Nous serons au Bar Georges, une maison victorienne en plein coeur de Montréal avec un menu exquis. Options végétariennes disponibles!",
    detail1: "À deux blocs de Metro Peel.",
    detail2: "Stationnement inclu.",
    detail3: "Hotel sur place disponible.",
    when: "13 Octobre",
    whenDetail1: "10:00am Réception",
    whenDetail2: "11:00am Cérémonie suivie du brunch!",
  },
};

const Details = ({lang = 'en'}) => (
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
          {t[lang].title1} <br /> {t[lang].title2}
        </h1>
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: '10px',
          }}
        >
          <p>{t[lang].description}</p>
          <ul>
            <li>{t[lang].detail1}</li>
            <li>{t[lang].detail2}</li>
            <li>{t[lang].detail3}</li>
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
          <h2>{t[lang].when}</h2>
          <ul>
            <li>{t[lang].whenDetail1}</li>
            <li>{t[lang].whenDetail2}</li>
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
