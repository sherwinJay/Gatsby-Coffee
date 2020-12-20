/** @jsx jsx */
import { css, jsx } from "@emotion/react"

export const mainHeaderContainer = css`
  /* background-color: #01bf71; */
  background-color: rgba(0,0,0,0.5);
  position: relative;
  z-index: 3;
`;
export const mainHeader = css`
  display: grid;
  grid: 60px/repeat(3,1fr);
  grid-gap: 15px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const mainNavContainer = css`
  & ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
export const mainNavLinks = css`
  text-decoration: none;
  color: #fff;
  padding: 0 10px;
`;

export const mobileIcon = css`
  display: none;

   @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: -7px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const buttonContainer = css`
  display: flex;
  justify-content: flex-end;
  
  & button {
    border: none;
    background-color: #000;
    color: #fff;
    padding: 12px 20px;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
  }

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
