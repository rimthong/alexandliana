import React from 'react'
import Screen from './screen'
import background from '../images/venue.jpg'

const t = {
  en: {
    title1: "The Venue",
    title2: "for Brunch",
    description: "We'll be at <a class='link' href='https://www.bargeorge.ca/' target='_blank'>Bar Georges</a>, a lovely victorian mansion in the middle of downtown Montreal with an exquisite menu. Menu will have vegetarian options.",
    detail1: "Two blocks from Peel Metro.",
    detail2: "Parking included in wedding.",
    detail3: "Hotel on premise available.",
    when: "October 13th",
    whenDetail1: "10:00am Reception",
    whenDetail2: "11:00am Ceremony, followed by brunch!",
    openMap: "Open Map",
  },
  fr: {
    title1: "L'Emplacement",
    description: "Nous serons au <a class='link' href='https://www.bargeorge.ca/' target='_blank'>Bar Georges</a>, une maison victorienne en plein coeur de Montréal avec un menu exquis. Options végétariennes disponibles!",
    detail1: "À deux blocs de Metro Peel.",
    detail2: "Stationnement inclu.",
    detail3: "Hotel sur place disponible.",
    when: "13 Octobre",
    whenDetail1: "10:00am Réception",
    whenDetail2: "11:00am Cérémonie suivie du brunch!",
    openMap: "Ouvrir Carte",
  },
};

const Venue = ({lang = 'en'}) => (
  <Screen id="venue" image={background}>
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '3.5rem',
          textAlign: 'center',
        }}
      >
        {t[lang].title1}
      </h1>
      <div className="dark-box venue-info-container">
        <div className="venue-map">
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.543092049602!2d-73.57791038452005!3d45.49914493913222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a41975c7943%3A0xd36f5ad8ca917aa5!2sBar+George!5e0!3m2!1sen!2sca!4v1540177150840" width="300" height="300" frameborder="0" allowfullscreen></iframe>
        </div>
        <div
          style={{
            marginLeft: '10px',
          }}
        >
          <p dangerouslySetInnerHTML={{__html: t[lang].description}}></p>
          <ul>
            <li>{t[lang].detail1}</li>
            <li>{t[lang].detail2}</li>
            <li>{t[lang].detail3}</li>
          </ul>
          <a className="venue-map-link" href="https://www.google.com/maps?ll=45.499141,-73.575722&z=16&t=m&hl=en-CA&gl=CA&mapclient=embed&cid=15235495951575644837" target="_blank">{t[lang].openMap}</a>
        </div>
      </div>
    </div>
  </Screen>
);

export default Venue;
