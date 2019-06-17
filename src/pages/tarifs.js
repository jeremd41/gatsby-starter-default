import React from "react"
import room from "../images/mentonesecond.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Tarifs = () => (
  <Layout>
    <SEO title="Tarifs" />
    <div className="wrapper">
      <div className="head-pages">
        <h1>Tarifs</h1>
        <img className="responsive" src={room} />
      </div>
    </div>
  </Layout>
)

export default Tarifs
