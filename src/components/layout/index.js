import React from "react"
import Header from "../header"
import useSiteMetadata from "../../hooks/use-site-metadata"
import { Main } from "./styles"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <>
      <Header siteTitle={title} />
      <Main>{children}</Main>
      <footer>Benjamin Reid</footer>
    </>
  )
}

export default Layout
