import React from 'react'
import Layout from '../components/layout'
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import Img from "gatsby-image"
import { mainContainer, locationInfoContainer, imgContainer } from './styles';
import {graphql, Link } from 'gatsby';

export const getLocationData = graphql`
  query GetSingleLocation($title:String) {
    location: contentfulLocations(slug: {eq: $title}) {
      title
      price
      info {
        info
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

const Location = ({
  data:{
    location:{
      title,
      price,
      image:{ fluid },
      info:{ info }
    }
  } 
}) => {
  return (
    <Layout>
      <section css={mainContainer} >
        <Img css={imgContainer}
          src={fluid.src} 
          alt={title}
          fluid={fluid} 
        />
        <div css={locationInfoContainer}>
          <h2>{title}</h2>
          <h4>${price}</h4>
          <p>{info}</p>
        </div>
      </section>
    </Layout>
  )
}

export default Location