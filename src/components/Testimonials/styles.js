/** @jsx jsx */
import { css, jsx } from "@emotion/react"

export const tripsImgContainer2 = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px;

  & img {  
    border-radius: 10px;
    overflow: hidden;
  }
`;
