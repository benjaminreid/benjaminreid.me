import React from "react"
import Header from "./header"
import useSiteMetadata from "../hooks/use-site-metadata"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <>
      <Header siteTitle={title} />
      <main>{children}</main>
      <footer>Benjamin Reid</footer>
    </>
  )
}

export default Layout
