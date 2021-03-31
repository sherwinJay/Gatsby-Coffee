/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export const contactContainer = css`
  display: grid;
  justify-content: center;

  & form{
    width: 500px;
    display: grid;
    justify-items: center;
  }

  & input, textarea {
    display: block;
    margin: 7px 0;
    padding: 10px 12px;
    width: 100%;
    outline: 0;
  }

  & textarea {
    min-height: 80px;
    margin-bottom: 20px;
  }
`;