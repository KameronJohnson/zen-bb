import React from "react"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/About/Hero'
import Info from '../components/About/Info'
import Footer from '../components/Shared/Footer'

const AboutPage = () => (
	<Layout>
		<SEO title="Home" />
		<Hero />
		<Info />
		<Footer />
	</Layout>
)

export default AboutPage
