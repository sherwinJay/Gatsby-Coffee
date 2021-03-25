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
        ul{
          padding: 0;
          list-style: none;
        }
      `}
    />
  )
};

export const defaultKV = css`
  & > div{
    padding: 130px 0 50px !important;
  }
  & h1{
    text-align: left !important;
    margin-bottom: 0 !important;
    font-size: 50px;
    color: #fff;
  }

  @media screen and (max-width: 1230px){
    & > div{
      padding: 110px 0 35px;
    }
  }

  @media screen and (max-width: 550px){
    & > div{
      padding: 70px 0 25px;
    }
    & h1 {
      font-size: 36px;
    }
  }
`;

export const defaultSection = css`
  width: 1200px;
  margin: 0 auto;
  padding: 90px 0;

  & h1, h2{
    margin: 0 0 50px;
    text-align: center;
  }

  @media screen and (max-width: 1230px){
    width: 85%;
    padding: 70px 0;
  }

  @media screen and (max-width: 550px){
    width: 85%;
    margin: 0 auto;
    padding: 40px 0;
    font-size: 14px;

    & h2{
      margin: 0 0 30px;
    }
  }
  `;