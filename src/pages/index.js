import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import zenFrog from '../images/zen-frog.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <div class="center-content">
        <h1 className="tagline">Zen Bodybuilding</h1>
        <div className="d-flex justify-content-center">
          <img src={zenFrog} className="zen-frog"></img>
        </div>
        <a className="button">Some Action</a>
      </div>
    </section>
  </Layout>
)

export default IndexPage
