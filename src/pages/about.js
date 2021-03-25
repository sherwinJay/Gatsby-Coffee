import React from 'react'
import { Link } from "gatsby"
import SEO from '../components/seo'
import Layout from "../components/layout"
import About from '../components/About'

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <SEO title="About Us" />
        <About />
      </Layout>
    </div>
  )
}

export default AboutPage
