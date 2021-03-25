/** @jsx jsx */
import { css, jsx } from "@emotion/react"

export const sidebarContainer = ({ isOpen }) => css`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  display: ${isOpen ? "grid" : "none"};
  align-items: center;
  left: 0;
  top: ${isOpen ? "0" : "-100%"};
  opacity: ${isOpen ? "100%" : "0"};
  transition: 0.3s ease-in-out;
  text-align: center;

  & ul {
    list-style: none;
    padding: 0;
  }
  
  & li {
    padding: 10px 0;
  }
`;

export const sidebarMenu = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const sideNavLinks = css`
 color: #fff;
 font-size: 18px;
 text-decoration: none;
 padding: 10px 0;
`;

export const iconWrapper = css`
  position: absolute;
  background-color: transparent;
  top: 1.2rem;
  right: 1.5rem;
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  color: #fff;
`;