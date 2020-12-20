import React from 'react'

/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import {useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import { tripsImgContainer2 } from './styles';

const getContentfulData = graphql`
{
  allContentfulLocations{
    nodes{
      id,
      title,
      price,
      slug,
      info{
        info
      },
      image{
        fluid{
          ...GatsbyContentfulFluid
        }
      }
    }
  }
}
`


const Testimonials = () => {

  const { 
    allContentfulLocations: { 
      nodes: data
    }    
  } = useStaticQuery(getContentfulData);

  console.log(data)

  const getContentful = data.map((item) => {
    return (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <Img 
          src={item.image.fluid.src} 
          alt={item.slug} 
          fluid={item.image.fluid} 
        />
      </div>
    )
  });

  return (
    <div>
      <h1>Testimonials</h1>
      <div css={tripsImgContainer2}>
        {getContentful}
      </div>
    </div>
  )
}

export default Testimonials