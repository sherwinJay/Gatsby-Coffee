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
`;