import "sanitize.css"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.grey(700)};
    color: ${props => props.theme.colors.orange(100)};
    line-height: 1.4;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Rubik, sans-serif;
    line-height: 1.2;
  }

  a {
    color: ${props => props.theme.colors.orange()};
  }
`
