import React from 'react'
import { Link } from "gatsby"
import SEO from '../components/seo'
import Layout from "../components/layout"
import Products from '../components/Products'

const ProductsPage = () => {
  return (
    <div>
      <Layout>
        <SEO title="Our Products" />
        <Products />
      </Layout>
    </div>
  )
}

export default ProductsPage
