import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import {
  mainHeader,
  mainNavLinks,
  mobileIcon,
  mainNavContainer,
  buttonContainer,
  mainHeaderContainer,
} from "./styles";
import { navData } from "../../data/NavItems"
import { FaBars } from "react-icons/fa";

// nav items layout here
const navItems = navData.map((navItem, idx) => {
  return(
    <li key={idx}>
      <Link css={mainNavLinks} to={navItem.link}>{navItem.title}</Link>
    </li>
  )
});

const Header = ({ siteTitle }) => {
  return (
    <header css={mainHeaderContainer}>
      <div css={mainHeader}>
        <div>
          <Link css={mainNavLinks} to="/">EXPLORE</Link>
        </div>
        <nav css={mainNavContainer}>
          <ul>
            { navItems }
          </ul>
        </nav>
        <div css={mobileIcon}>
          <FaBars />
        </div>
        <div css={buttonContainer}>
          <button>Connect with us</button>
        </div>
      </div>
    </header>
  )
}

export default Header
