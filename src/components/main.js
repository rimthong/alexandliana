import React from 'react'
import Layout from './layout'
import Announcement from './announcement'
import Details from './details'
import RSVP from './rsvp'

const Main = ({lang}) => (
  <Layout>
    <Announcement lang={lang} />
    <Details lang={lang} />
    <RSVP lang={lang} />
  </Layout>
)

export default Main
