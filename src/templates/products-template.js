import Layout from '../components/layout'
/** @jsx jsx */
import { jsx } from "@emotion/react"
import Img from "gatsby-image"
import { mainContainer, locationInfoContainer, imgContainer } from './styles';
import { graphql } from 'gatsby';

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
          <button>
            Add to cart
          </button>
        </div>
      </section>
    </Layout>
  )
}

export default Location