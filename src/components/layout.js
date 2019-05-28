import React from "react"
import Header from "./header"
import useSiteMetadata from "../hooks/use-site-metadata"
import Theme from "./theme"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <Theme>
      <Header siteTitle={title} />
      <main>{children}</main>
      <footer>Benjamin Reid</footer>
    </Theme>
  )
}

export default Layout
