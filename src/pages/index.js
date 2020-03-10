import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import zenFrog from '../images/zen-frog.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="tagline">Zen Bodybuilding</h1>
    <div className="d-flex justify-content-center">
      <img src={zenFrog} className="zen-frog"></img>
    </div>
  </Layout>
)

export default IndexPage
