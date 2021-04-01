import React from 'react';
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import {useStaticQuery, graphql} from 'gatsby';
import { contactContainer } from './styles';
import { defaultSection } from '../styles/main';
import TitleSection from '../PageTitle';

const imageData = graphql`
{
  bgImage: file(relativePath: { eq: "contact-KV.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`

const ContactUs = () => {

  const {
    bgImage: backgroundImageData
  } = useStaticQuery(imageData);

  return (
      <>
        <TitleSection 
          title={"Contact Us"} 
          bgImage={backgroundImageData.childImageSharp.fluid} 
        />
        <div css={[contactContainer, defaultSection]}>
          <form>
            <input type="text" placeholder="Name:"/>
            <input type="email" placeholder="Email:"/>
            <input type="number" placeholder="Mobile/Phone:"/>
            <textarea placeholder="Message:"></textarea>
            <button type="submit">Submit</button>
          </form>    
        </div>
      </>
    )
}

export default ContactUs
