/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export const contactContainer = css`
  display: grid;
  justify-content: center;

  & form{
    width: 500px;
    display: grid;
    justify-items: center;

  @media screen and (max-width: 500px) {
    width: 80vw;
  }

  }

  & input, textarea {
    display: block;
    margin: 7px 0;
    padding: 10px 12px;
    width: 100%;
    outline: 0;
    border-radius: 20px;
    border: 1px solid #442d1d;
  }

  & textarea {
    min-height: 80px;
    margin-bottom: 20px;
    border: 1px solid #442d1d;
  }

  & button{
    background-color: #442d1d;
    color: #fff;
    border: none;
    padding: 10px 28px;
    border-radius: 20px;
    cursor: pointer;
  }
`;

export const contactWrapper = css`
  min-height: 90vh;
`;