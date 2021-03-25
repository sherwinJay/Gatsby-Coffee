/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import ProductKV from '../../assets/images/product-kv.jpg'

export const productKV = css `
  background: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${ProductKV}) center no-repeat;
  background-size: cover;
`;
export const productsContainer = css`
  width: 1200px;
  margin: 0 auto;
  padding: 70px 0;
`;
export const categoryListSection = css`
  display: grid;
  justify-content: center;
`;
export const categoryContainer = css`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  list-style: none;
  padding: 0;
  grid-gap: 10px;

  & li {
    display: grid;
    justify-content: center;
    padding: 10px 0;
    border: 1px #000 solid;
    cursor: pointer;
  }

  @media screen and (max-width: 550px){
    grid-template-columns: repeat(2, 100px);
  }
`;
export const productsItemsContainer = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  list-style: none;

  & li {
    box-shadow: 0 0 3px 1px #555;
  }

  @media screen and (max-width: 760px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 550px){
    grid-template-columns: 1fr;
  }
`;
 export const productInfo = css`
  display: grid;
  align-items: center;
  padding: 0 10px 25px;
 `