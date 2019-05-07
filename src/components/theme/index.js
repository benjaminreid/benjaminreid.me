import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./../../theme"
import { GlobalStyle } from "./styles"

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        {children}
        <GlobalStyle />
      </>
    </ThemeProvider>
  )
}
