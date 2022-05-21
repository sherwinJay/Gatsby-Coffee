/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import bgCoffee from '../../assets/images/bg-coffee.jpg'


export const defaultSection = css`
  width: 1200px;
  margin: 0 auto;
  padding: 90px 0;

  & h2{
    margin: 0 0 50px;
    text-align: center;
  }

  @media screen and (max-width: 1230px){
    width: 85%;
    padding: 70px 0;
  }

  @media screen and (max-width: 550px){
    width: 85%;
    margin: 0 auto;
    padding: 40px 0;
    font-size: 14px;

    & h2{
      margin: 0 0 30px;
      line-height: 35px;
    }
  }

`;

export const productsSection = css`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  
  & h2 {
    margin-bottom: 0;
    text-align: left;
  }
`;

export const productsContainer = css`
  grid-column-start: 1;
  grid-column-end: 3;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 15px;

  & > :nth-of-type(1){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    height: 250px;
  }
  & > :nth-of-type(2){
   grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    height: 250px;
  }

  & > :nth-of-type(3){
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    height: 100%;
    max-height: 515px;
  }

  & > :nth-of-type(4){
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    height: 250px;
    background: #ccc;
  }

  & > :nth-of-type(5){
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    height: 250px;
    background: #ccc;
  }

  @media screen and (max-width: 760px){
    grid-template-columns: repeat(2, auto);;
    grid-template-rows: repeat(3, auto);
    grid-gap: 10px;

    & > :nth-of-type(1){
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    height: 250px;
  }
  & > :nth-of-type(2){
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    height: 250px;
  }

  & > :nth-of-type(3){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  & > :nth-of-type(4){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    height: 250px;
    background: #ccc;
  }

  & > :nth-of-type(5){
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    height: 250px;
    background: #ccc;
  }

    & > div {
      height: 100%;
    }
  }
  /* @media screen and (max-width: 550px){
    grid-template-columns: 1fr;
  } */
`;

export const productImageWrapper = css`
  height: 100% !important;
`;

export const productBtn = css`
  text-align: center;
  padding: 10px 0;
  background-color: #66462f;
  width: 150px;
  text-decoration: none;
  color:#fff;
  border: 1px solid #66462f;
  transition: all 0.3s ease-in-out;
  display: grid;
  justify-self: end;

  &:hover{
    background-color: #fff;
    color: #66462f;
  }

  @media screen and (max-width: 480px){
    height: max-content;
    align-self: center;
    width: auto;
    padding: 15px 10px;
  }
`;

export const aboutSection = css`
  line-height: 24px;
`;
export const aboutContainer = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  align-items: center;

  & h2 {
    text-align: left;
    margin-bottom: 30px;
    line-height: 32px;
  }

  @media screen and (max-width: 900px){
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const reservationSection = css`
  background: url(${bgCoffee}) center no-repeat;
  background-size: cover;
  color: #fff;
  line-height: 24px;
  text-align: center;

  & h2{
    color: #fff;
    line-height: 32px;
  }
`;
export const reservationContainer = css`
  padding: 120px 0;
`;