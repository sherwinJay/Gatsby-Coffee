import React from 'react'

/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { tripsContainer, tripsContent, tripsImgContainer, tripsBtn } from './styles';
import {useStaticQuery, graphql, Link } from 'gatsby';
import Img from "gatsby-image"

const getTripsData = graphql`
  {
    allTripsJson {
      nodes {
        id
        alt
        name
        button
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
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

const TripsSection = () => {
  const { 
    allContentfulLocations: { 
      nodes: data
    }    
  } = useStaticQuery(getContentfulData);

  console.log(data)

  const getTrips = data.map((item) => {
    return (
      <div key={item.id}>
        <Link to={`/explore/${item.slug}`}>
        <Img 
          src={item.image.fluid.src} 
          alt={item.slug}
          fluid={item.image.fluid} 
        />
        </Link>
      </div>
    )
  });
  
  return (
    <section css={tripsContainer}>
      <div css={tripsContent}>
        <h1>Top Destinations</h1>
        <p>Here are interesting destinations you could visit.</p>
        <p css={tripsBtn}>View all trips</p>
      </div>
      <div css={tripsImgContainer}>
        { getTrips }
      </div>
    </section>
  )
}

export default TripsSection
