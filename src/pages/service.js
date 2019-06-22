import React from "react"
import Fade from "react-reveal/Fade"

import Cadre from "../images/cadre.jpg"
import Service from "../images/bigben.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Chambres = () => (
  <Layout>
    <SEO title="Service" />
    <Fade right>
      <div className="wrapper">
        <div className="head-pages">
          <h1>Services</h1>
          <img className="responsive" src={Cadre} />
        </div>
        <div className="service">
          <ul>
            <li>Cuisine locale</li>
            <li>Excursions</li>
            <li>Salle de sport</li>
            <li>Balcon</li>
            <li>Parking</li>
            <li>Wifi gratuit</li>
            <li>Plâteau de courtoisie</li>
            <li>Lits pour enfant</li>
          </ul>
          <img className="responsive" src={Service} />
        </div>
      </div>
    </Fade>
  </Layout>
)

export default Chambres
