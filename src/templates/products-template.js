import React from 'react'
import Layout from '../components/layout'
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import Img from "gatsby-image"
import { mainContainer, locationInfoContainer, imgContainer } from './styles';
import {graphql, Link } from 'gatsby';

export const getLocationData = graphql`
  query GetSingleLocation($title:String) {
    location: contentfulCoffeeItems(slug: {eq: $title}) {
      title
      price
      description {
        description
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
      description:{ description }
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
          <p>{description}</p>
        </div>
      </section>
    </Layout>
  )
}

export default Location