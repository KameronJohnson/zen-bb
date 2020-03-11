import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Home/Hero"
import Info from "../components/Home/Info"
import Products from "../components/Home/Products"
import Contact from "../components/Home/Contact"
import Footer from "../components/Shared/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Products />
    <Info />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
