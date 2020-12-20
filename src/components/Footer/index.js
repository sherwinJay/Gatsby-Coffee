import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { footerContainer, copyright, socialmediaContainer, footerWrapper } from "./styles";
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div css={footerContainer}>
      <div css={footerWrapper}>
        <p css={copyright}>© Copyright Reserved 2020</p>
        <div css={socialmediaContainer}>
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
