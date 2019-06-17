import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
  margin: 100px auto;
  text-align: center;
`
const H1 = styled.div`
  margin: 25px;
  font-weight: bold;
  font-size: 30px;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="wrapper">
      <Container>
        <H1>404 error - NOT FOUND</H1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </div>
  </Layout>
)

export default NotFoundPage
