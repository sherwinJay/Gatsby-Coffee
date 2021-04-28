/** @jsx jsx */
import { jsx } from "@emotion/react";
import {useStaticQuery, graphql, Link } from 'gatsby';
import Img from "gatsby-image";
import { defaultSection, productBtn, productImageWrapper, productsContainer, productsSection } from './styles';

const getProductData = graphql`
{
  allProductsJson {
    nodes {
      id
      name
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
`

const ProductsSection = () => {

  const { 
    allProductsJson: { 
      nodes: data
    }    
  } = useStaticQuery(getProductData);

  const createProductsTemplate = data.map((product, idx) => {
    return (
      <div key={product.id}>
        <Img className={`product-image-${idx}`} css={productImageWrapper}
          src={product.image.childImageSharp.fluid.src} 
          alt={product.name}
          fluid={product.image.childImageSharp.fluid} 
        />
      </div>
    )
  })

  return (
    <section css={[defaultSection,productsSection]}>
      <h2>Our Products</h2>
      <Link css={productBtn} to="/products">See all products</Link>
      <div css={productsContainer}>
        {createProductsTemplate}
      </div>
    </section>
  )
}

export default ProductsSection
