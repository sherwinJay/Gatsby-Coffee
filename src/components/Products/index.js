import React from 'react'
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { productsContainer, categoryListSection, categoryContainer, productsItemsContainer, productInfo } from './styles';
import {useStaticQuery, graphql, Link } from 'gatsby';
import Img from "gatsby-image";
import { useEffect, useState } from 'react';
import { defaultKV, defaultSection } from '../styles/main';
import TitleSection from '../PageTitle';

const getContentfulData = graphql`
{
  allContentfulCoffeeItems {
    nodes {
      id,
      price,
      title,
      category,
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

  // create category list
  const getCategories = data.map(data => data.category);
  const setCategories = new Set(getCategories);
  let categories = Array.from(setCategories)
  categories = ['all', ...setCategories].sort();

  // handle filter function
  const handleFilter = (category) => {

    // const cat_btn = document.querySelectorAll(".category-btn");
    // const cat_id = document.getElementById(category);
    // cat_btn.classList.remove('active');
    // cat_id.classList.add("active");
    if(category === "all"){

      setProductList(data)
    }else{
      setProductList(data.filter((product) => {
        return product.category === category;
      }))
    }
  }

   // create category template
   const createCategoryTemplate = categories.map((category, idx) => {
    return (
      <li key={idx} id={category} className="category-btn" onClick={ () => handleFilter(category)}>
        {category}
      </li>
    )
  })

  const createProductsTemplate = productList.map(product => {
    return (
      <li key={product.id}>   
        <Img 
          src={product.image.fluid.src}
          fluid={product.image.fluid}
        />
        <div css={productInfo}>
          <h3>
            {product.title}
          </h3>
          {/* <p>{product.description.description}</p> */}
          <button>
            ₱{product.price}
          </button>
        </div>
      </li>
    )
  })

  return (
    <>
      <TitleSection
        title={"Our Products"} 
        bgImage={backgroundImageData.childImageSharp.fluid} 
      />
      <div css={[defaultSection, productsContainer]}>
        <div css={categoryListSection}>
          <ul css={categoryContainer}>
            { createCategoryTemplate }
          </ul>
        </div>
        {/*  */}
        <ul css={productsItemsContainer}>
          { createProductsTemplate }
        </ul>
        
      </div>
    </>
  )
}

export default Products
