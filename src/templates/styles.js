/** @jsx jsx */
import { css, jsx } from "@emotion/react"

export const mainContainer = css`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 15px;
  width: 1200px;
  margin: 0 auto;
  padding: 70px 20px;
  min-height: 80vh;

  @media screen and (max-width: 480px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    width: auto;
  }
`;

export const locationInfoContainer = css`
  grid-column-start: 2;
  grid-column-end: 5;

  @media screen and (max-width: 480px){
    grid-column-start: 1;
    grid-column-end: 2;
    margin-top: -45px;
  }
`;

export const imgContainer = css`
  height: 300px;
`;