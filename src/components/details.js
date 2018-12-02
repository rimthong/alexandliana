import React from 'react'
import Screen from './screen'
import background from '../images/details.jpg'

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
    whenDetail3: "More details to come!",
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
    whenDetail3: "Autres détails à venir!",
  },
};

const Details = ({lang = 'en'}) => (
  <Screen id="details" image={background}>
    <div className="detail-container"
    >
      <div className="detail-title">
        <h1>
          {t[lang].title1}
        </h1>
        <h1>
          {t[lang].title2}
        </h1>
      </div>
      <div className="dark-box">
        <div>
          <h2>{t[lang].when}</h2>
          <ul>
            <li>{t[lang].whenDetail1}</li>
            <li>{t[lang].whenDetail2}</li>
            <li>{t[lang].whenDetail3}</li>
          </ul>
        </div>
      </div>
    </div>
  </Screen>
);

export default Details;
