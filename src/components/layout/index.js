import React from "react"
import Header from "../header"
import useSiteMetadata from "../../hooks/use-site-metadata"
import { Main } from "./styles"
import Theme from "./../theme"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <Theme>
      <Header siteTitle={title} />
      <Main>{children}</Main>
      <footer>Benjamin Reid</footer>
    </Theme>
  )
}

export default Layout
