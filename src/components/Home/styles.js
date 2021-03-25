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
    }
  }

`;

export const productsSection = css`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 40px;
  
  & h2 {
    margin-bottom: 0;
  }
`;

export const productsContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 760px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 550px){
    grid-template-columns: 1fr;
  }
`;

export const productImageWrapper = css`
  height: 250px;
`;

export const productBtn = css`
  text-align: center;
  padding: 10px 0;
  border: 1px solid #66462f;;
  width: 150px;
  margin: 0 auto;
  text-decoration: none;
  color: #66462f;
  transition: all 0.3s ease-in-out;

  &:hover{
    background-color: #66462f;
    color:#fff;
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
`;
export const reservationContainer = css`
  padding: 120px 0;
`;