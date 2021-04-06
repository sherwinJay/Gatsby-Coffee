/** @jsx jsx */
import { css, jsx } from "@emotion/react"

export const mainHeaderContainer = css`
  /* background-color: #01bf71; */
  background-color: #66462f;
  position: relative;
`;
export const mainHeader = css`
  display: grid;
  grid: 60px/repeat(3,1fr);
  grid-gap: 15px;
  align-items: center;
  width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1230px){
    width: 85%;
  }

  @media screen and (max-width: 760px) {
    grid: 60px/repeat(2,1fr);
    justify-content: space-between;
    width: 85%
  }
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

export const mainNavLogo = css`
  @import url('https://fonts.googleapis.com/css2?family=Kreon&family=Prosto+One&display=swap');

  font-family: 'Prosto One', cursive;
  font-size: 24px;
  text-decoration: none;
  color: #fff;
`;

export const mainNavLinks = css`
  text-decoration: none;
  color: #fff;
  padding: 0 10px;
`;

export const mobileIcon = css`
  display: none;

   @media screen and (max-width: 760px) {
     
    display: grid;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    justify-content: end;
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
