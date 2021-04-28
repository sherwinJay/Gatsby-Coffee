import React from 'react';
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Img from "gatsby-image";
import { productsItemsContainer, productInfo, seeMore } from './styles';
import { Link } from 'gatsby';

const ProductItems = ({ productList }) => {

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
          <Link to={`/products/${product.slug}`} css={seeMore}>
            See More
          </Link>
        </div>
      </li>
    )
  })

	return (
		<>
			<ul css={productsItemsContainer}>
				{ createProductsTemplate }
			</ul>
		</>
	)
}

export default ProductItems
