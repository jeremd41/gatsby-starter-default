import React from "react"
import room from "../images/mentonesecond.jpg"
import { graphql, Link } from "gatsby"

import Fade from "react-reveal/Fade"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Tarifs = ({ data }) => (
  <Layout>
    <SEO title="Tarifs" />
    <Fade right>
      <div className="wrapper">
        <div className="head-pages">
          <h1>Tarifs</h1>
          <img className="responsive" src={room} />
        </div>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="card-room" key={node.id}>
            <h3>{node.frontmatter.title}</h3>
            <img src={node.frontmatter.img} />
            <p>{node.frontmatter.prix}</p>
            <Link to={node.fields.slug}>Plus d'info</Link>
            <p>{node.frontmatter.description}</p>
            <ul>
              <li>{node.frontmatter.taille}</li>
              <li>{node.frontmatter.lit}</li>
            </ul>
          </div>
        ))}
      </div>
    </Fade>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            taille
            lit
            img
            prix
          }
        }
      }
    }
  }
`

export default Tarifs
