/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "../lib/bootstrap.min.css"
import "./layout.css"

import Navbar from './Shared/Navbar'

const Layout = ({ children }) => (
  <div className="main-wrapper">
    <Navbar />
    {children}
  </div>
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
