/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export const aboutContainer = css`
  width: 1200px;
  margin: 0 auto;
  padding: 70px 0;
  line-height: 24px;
  display: grid;
  grid-template-columns: 300px auto;
  grid-gap: 25px;

  & p {
   margin-bottom: 25px; 
  }

  @media screen and (max-width: 760px){
    grid-template-columns: 1fr;
  }
`;

export const aboutImg = css`
  @media screen and (max-width: 760px){
    height: 500px;
  }
  @media screen and (max-width: 460px){
    height: 300px;
  }
`