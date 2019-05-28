import { Link } from "gatsby"
import React from "react"
import { Container } from "./styles"

const Header = ({ siteTitle }) => (
  <Container>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </Container>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
