/** @jsx jsx */
import { Global, css, jsx } from "@emotion/react"

export const GlobalStyle = () => {
  return(
    <Global
      styles={css`
        body {
          font-family: 'Roboto', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          position: relative;
          min-height: 100vh;
        }
      `}
    />
  )
};