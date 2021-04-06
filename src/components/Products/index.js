import React from 'react'
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { productsContainer, categoryListSection } from './styles';
import {useStaticQuery, graphql, Link } from 'gatsby';
import { useState } from 'react';
import { defaultSection } from '../styles/main';
import TitleSection from '../PageTitle';
import ProductCategory from './productCategory';
import ProductItems from './productItems';


const getContentfulData = graphql`
{
  allContentfulCoffeeItems {
    nodes {
      id,
      price,
      title,
      category,
      slug,
      description {
        description
      },
      image{
        fluid{
          ...GatsbyContentfulFluid
        }
      }
    }
  },
  bgImage: file(relativePath: { eq: "product-kv.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`

const Products = () => {

  const { 
    allContentfulCoffeeItems: { 
      nodes: data
    },
    bgImage: backgroundImageData     
  } = useStaticQuery(getContentfulData);

  const [productList, setProductList] = useState(data);
  const [productCategory, setProductCategory] = useState("all");

  // handle filter function
  const handleFilter = (category) => {
    
    // handle active state
    setProductCategory(category);

    // handle filter items
    category === "all" ? setProductList(data) : setProductList(data.filter( (product) =>  product.category === category ));
  
  }

  return (
    <>
      <TitleSection
        title={"Our Products"} 
        bgImage={backgroundImageData.childImageSharp.fluid} 
      />
      
      <div css={[defaultSection, productsContainer]}>
        <div css={categoryListSection}>
          <ProductCategory productCategory={productCategory} data={data} handleFilter={handleFilter} /> 
        </div>

        <ProductItems productList={productList} />
      </div>
    </>
  )
}

export default Products
