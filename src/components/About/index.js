import React from 'react'
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { aboutContainer, aboutKV } from './styles';
import Img from "gatsby-image";
import { defaultKV, defaultSection } from '../styles/main';


const AboutUs = () => {


  return (
    <>
      <div css={[aboutKV, defaultKV]}>
        <div css={[defaultSection]}>
          <h1>
            About Us
          </h1>
        </div>
      </div>
      <div css={[defaultSection, aboutContainer]}>
        <p>
          Bitters scenester austin, food truck slow-carb shabby chic enamel pin prism man braid wolf. Polaroid deep v heirloom pitchfork next level. Ethical copper mug vinyl cloud bread, trust fund godard artisan jianbing. Beard biodiesel bitters everyday carry forage truffaut mixtape. Slow-carb fanny pack banh mi trust fund swag small batch VHS farm-to-table tattooed schlitz chillwave DIY yr. Hoodie marfa flexitarian cardigan literally air plant actually etsy jianbing chillwave.
          Salvia chambray you probably haven't heard of them, fanny pack drinking vinegar vape raclette meditation. Thundercats squid pabst retro messenger bag celiac. Cornhole gastropub fixie la croix pork belly paleo ugh sustainable copper mug jianbing beard banh mi. Cliche gentrify hot chicken fingerstache vice celiac.
        </p>
        <p>
          Typewriter readymade echo park, mustache cloud bread brooklyn stumptown tilde etsy plaid sustainable try-hard lumbersexual. Yuccie brooklyn single-origin coffee coloring book. Selvage small batch photo booth tacos yr post-ironic jean shorts meh. Cardigan tacos affogato, tbh stumptown meditation 90's pickled tote bag before they sold out etsy.
        </p>
      </div>
    </>
  )
}

export default AboutUs
