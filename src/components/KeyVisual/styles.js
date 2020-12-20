/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export const kvContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  margin-top: -60px;
  background-color: #000;

  :before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100% ), 
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
  }
`;

export const kvBgContainer = css`
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;
export const kvBg = css`
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 100vh;
`;

export const kvContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  color: #fff;
  text-align: center;

  & h2 {
    font-size: 60px;
    margin-top: 0;
    margin-bottom: 30px;
  }
  & p {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 26px;
  }

  @media screen and (max-width: 500px) {
    & h2 {
      font-size: 38px;
    }
    & p {
      font-size: 16px;
      line-height: 22px;
    }
  }
`;

export const kvButton = css`
  cursor: pointer;
  background-color: #333;
  padding: 12px 25px;
  border-radius: 30px;
  margin: 0;
  font-size: 16px !important;

  @media screen and (max-width: 500px) {
    & p {
      font-size: 14px;
    }
  }
`;