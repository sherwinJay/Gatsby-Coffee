/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export const footerContainer = css`
  background-color: #29180b;
  padding: 20px 0;
  /* position: absolute;
  left: 0;
  bottom: 0;
  width: 100%; */
`;
export const footerWrapper = css`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1230px){
    width: 85%;
  }

  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const copyright = css`
  font-size: 11px;
`;

export const socialmediaContainer = css`
  font-size: 20px;
  width: 140px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 760px) {
    margin-top: 10px;
  }
`;