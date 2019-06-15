import React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Chambres = () => (
  <Layout>
    <SEO title="Chambres" />
    <Fade left>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </Fade>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Chambres
