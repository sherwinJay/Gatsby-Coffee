/** @jsx jsx */
import { css, jsx } from "@emotion/react"

export const tripsContainer = css`
  display: grid;
  grid-template-columns: repeat(7,1fr);
  grid-gap: 15px;
  width: 1200px;
  margin: 0 auto;
  padding: 70px 0;
`;

export const tripsContent = css`
  grid-column-start: 1;
  grid-column-end: 3;
`;
export const tripsImgContainer = css`
  grid-column-start: 3;
  grid-column-end: 8;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;

  & img {  
    border-radius: 10px;
    overflow: hidden;
  }
`;

export const tripsBtn = css`
  padding: 12px 22px;
  border-radius: 20px;
  background-color: #333;
  cursor: pointer;
  color: #fff;
  display: inline-block;
`;