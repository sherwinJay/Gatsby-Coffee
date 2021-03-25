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
  mainNavLogo,
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

const Header = ({ siteTitle, toggle }) => {
  return (
    <header css={mainHeaderContainer}>
      <div css={mainHeader}>
        <div>
          <Link css={mainNavLogo} to="/">KAPEKO</Link>
        </div>
        <nav css={mainNavContainer}>
          <ul>
            { navItems }
          </ul>
        </nav>
        <div css={buttonContainer}>
          <button>Connect with us</button>
        </div>
        <div css={mobileIcon}>
          <FaBars onClick={toggle} />
        </div>
      </div>
    </header>
  )
}

export default Header
