import { Link } from "gatsby"
import React from "react"
import { Container, Wrapper } from "./styles"

const Header = ({ siteTitle }) => (
  <Container>
    <Wrapper>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Wrapper>
  </Container>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
