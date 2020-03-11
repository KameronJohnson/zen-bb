import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Home/Hero"
import Info from "../components/Home/Info"
import Footer from "../components/Shared/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Info />
    <Footer />
  </Layout>
)

export default IndexPage
