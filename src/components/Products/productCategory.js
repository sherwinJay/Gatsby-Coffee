import React from 'react';

/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { active, categoryContainer } from './styles';


const ProductCategory = ({ productCategory, data, handleFilter }) => {
  // create category list
  const getCategories = data.map(data => data.category);
  const modifyCategories = new Set(getCategories);
  let categories = Array.from(modifyCategories)
  categories = ['all', ...modifyCategories].sort();

	// create category template
  const createCategoryTemplate = categories.map((category, idx) => {
    return (
      <li key={idx} id={category}
        css={productCategory === category ? active : ""} 
        onClick={ () => handleFilter(category)}
      >
        {category}
      </li>
    )
  })

	return (
		<>
			<ul css={categoryContainer}>
				{ createCategoryTemplate }
			</ul>
		</>
	)
}

export default ProductCategory
