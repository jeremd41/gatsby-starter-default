import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars, faTimes, faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Carousel from "../components/carousel"

import Layout from "../components/layout"
import SEO from "../components/seo"

library.add(faBars, faTimes, faCalendar)

const IndexPage = () => (
  <Layout>
    <SEO title="Acceuil" />
    <Carousel />
    <form className="formresa">
      <h2>Réserver votre séjour !</h2>
      <label>
        Arrivé
        <span className="calendar">
          {" "}
          <FontAwesomeIcon icon="calendar" />{" "}
        </span>
      </label>
      <input type="date" />
      <label>
        Départ
        <span className="calendar">
          <FontAwesomeIcon icon="calendar" />
        </span>
      </label>
      <input type="date" />
      <div className="nbperson">
        <label>Adultes</label>
        <input type="number" name="quantity" min="1" max="5" />
        <label>Enfants</label>
        <input type="number" name="quantity" min="1" max="5" />
      </div>
      <button type="submit">Rechercher</button>
    </form>
  </Layout>
)

export default IndexPage
