import React from "react"
import Header from "./Header"

/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { GlobalStyle } from "./styles/main"
import Footer from "./Footer";

const Layout = ({ children }) => {
  

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>    
      <Footer />
    </>
  )
}

export default Layout
