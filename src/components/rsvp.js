import React from 'react'
import Screen from './screen'
import rsvpbg from '../images/rsvp.jpg'

const t = {
  en: {
    title: "Please RSVP",
    text: "Please mention who will be attending, if you need parking, if you plan on staying at the hotel (we might be able to get a rate) or if you have food preferences or allergies.",
    name: "Name",
    email: "Email",
    message: "Message",
    rsvp: "RSVP!",
  },
  fr: {
    title: "Réservez!",
    text: "Veuillez mentionner qui viendra, si vous avez besoin de stationnement et si vous planifiez rester à l'hotel (nous pourrons négotier un tarif), ainsi que toute préférence ou allergie alimentaire.",
    name: "Nom",
    email: "Courriel",
    message: "Message",
    rsvp: "Réservez!",
  },
};

const RSVP = ({lang = 'en'}) => (
  <Screen id="rsvp" image={rsvpbg}>
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
      <form name="rsvp" data-netlify={true} data-netlify-honeypot="bot-field" method="POST" style={{ justifyContent: 'center', textAlign: 'center' }} action="/success?no-cache=1">
        <input type="hidden" name="bot-field" />
        <div className="field half first">
          <label htmlFor="name">{t[lang].name}&nbsp;</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">{t[lang].email}&nbsp;</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">{t[lang].message}&nbsp;</label>
          <textarea name="message" id="message" rows="6"></textarea>
        </div>
        <button type="submit">{t[lang].rsvp}</button>
      </form>
    </div>
  </Screen>
);

export default RSVP;
