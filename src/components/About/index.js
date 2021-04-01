import React from 'react'
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import {useStaticQuery, graphql} from 'gatsby';
import { aboutContainer } from './styles';
import Img from "gatsby-image";
import { defaultSection } from '../styles/main';
import TitleSection from '../PageTitle';

const imageData = graphql`
{
  image: file(relativePath: { eq: "about-coffee.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  bgImage: file(relativePath: { eq: "about-kv.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const AboutUs = () => {
  const { 
    image: data,
    bgImage: backgroundImageData
  } = useStaticQuery(imageData);


  return (
    <>
      <TitleSection 
        title={"About Us"} 
        bgImage={backgroundImageData.childImageSharp.fluid} 
      />
      <div css={[defaultSection, aboutContainer]}>
        <Img fluid={data.childImageSharp.fluid} />
        <div>
          <p>
            Bitters scenester austin, food truck slow-carb shabby chic enamel pin prism man braid wolf. Polaroid deep v heirloom pitchfork next level. Ethical copper mug vinyl cloud bread, trust fund godard artisan jianbing. Beard biodiesel bitters everyday carry forage truffaut mixtape. Slow-carb fanny pack banh mi trust fund swag small batch VHS farm-to-table tattooed schlitz chillwave DIY yr. Hoodie marfa flexitarian cardigan literally air plant actually etsy jianbing chillwave.
            Salvia chambray you probably haven't heard of them, fanny pack drinking vinegar vape raclette meditation. Thundercats squid pabst retro messenger bag celiac. Cornhole gastropub fixie la croix pork belly paleo ugh sustainable copper mug jianbing beard banh mi. Cliche gentrify hot chicken fingerstache vice celiac.
          </p>
          <p>
            Typewriter readymade echo park, mustache cloud bread brooklyn stumptown tilde etsy plaid sustainable try-hard lumbersexual. Yuccie brooklyn single-origin coffee coloring book. Selvage small batch photo booth tacos yr post-ironic jean shorts meh. Cardigan tacos affogato, tbh stumptown meditation 90's pickled tote bag before they sold out etsy.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutUs
