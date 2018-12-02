import React from 'react'
import Screen from './screen'
import homebg from '../images/home.png'

const t = {
  en: {
    curveText: "We're Getting Married!",
    date1: "October 13th",
    date2: "2019",
  },
  fr: {
    curveText: "Venez pour notre mariage!",
    date1: "13 Octobre",
    date2: "2019",
  },
};

const Announcement = ({lang}) => (
  <Screen id="home" image={homebg}>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%', width: '100%', maxWidth: '600px'}}>
      <svg viewBox="0 0 200 100">
        <path id="curve" d="M10 90 Q 100 20 190 90" />
        <text width="100%"  text-align="justify" style={{fill: 'white', fontFamily: 'pacifico'}}>
          <textPath href="#curve">
            {t[lang].curveText}
          </textPath>
        </text>
      </svg>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>{t[lang].date1}</h1>
        <h1>{t[lang].date2}</h1>
      </div>
    </div>
  </Screen>
);

export default Announcement;
