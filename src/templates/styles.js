/** @jsx jsx */
import { css, jsx } from "@emotion/react"

export const mainContainer = css`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 15px;
  width: 1200px;
  margin: 0 auto;
  padding: 70px 20px;
  min-height: 380px;
`;

export const locationInfoContainer = css`
  grid-column-start: 2;
  grid-column-end: 5;
`;

export const imgContainer = css`
  height: 300px;
`;