/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import AboutKV from '../../assets/images/about-kv.jpg'

export const aboutContainer = css`
  width: 1200px;
  margin: 0 auto;
  padding: 70px 0;
  line-height: 24px;

  & p {
   margin-bottom: 25px; 
  }
`;

export const aboutKV = css`
  background: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${AboutKV}) center no-repeat;
  background-size: cover;
`