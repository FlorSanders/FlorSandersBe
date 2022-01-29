import React from "react"
import PropTypes from "prop-types"

const Layout = function ({ children }) {
  return <>{children}</>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
