import React from "react"
import Header from "./header"
import useSiteMetadata from "../hooks/use-site-metadata"
import Theme from "./theme"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <Theme>
      <Header siteTitle={title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </Theme>
  )
}

export default Layout
