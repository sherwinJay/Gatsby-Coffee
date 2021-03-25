import React from 'react'
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "gatsby";

import { iconWrapper, sidebarContainer, sidebarMenu, sideNavLinks } from './styles';
import { navData } from "../../data/NavItems"
import {FaTimes} from 'react-icons/fa'

const Sidebar = ({isOpen, toggle}) => {

// nav items layout here
const navItems = navData.map((navItem, idx) => {
  return(
    <li key={idx}>
      <Link css={sideNavLinks} to={navItem.link}>{navItem.title}</Link>
    </li>
  )
});
  return (
    <div css={sidebarContainer({ isOpen })} onClick={toggle}>
      <div css={iconWrapper} onClick={toggle}>
          <FaTimes />
      </div>
      <ul css={sidebarMenu}>
        {navItems}
      </ul>
    </div>
  )
}

export default Sidebar
