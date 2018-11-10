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
    curveText: "On se marie!",
    date1: "13 Octobre",
    date2: "2019",
  },
};

const Announcement = ({lang}) => (
  <Screen id="home" image={homebg}>
    <svg viewBox="0 0 200 200">
      <path id="curve" d="M10 80 Q 95 10 180 80" />
      <text width="500" style={{fill: 'white', fontFamily: 'pacifico'}}>
        <textPath href="#curve">
          {t[lang].curveText}
        </textPath>
      </text>
    </svg>
    <h1>{t[lang].date1}</h1>
    <h1>{t[lang].date2}</h1>
  </Screen>
);

export default Announcement;
