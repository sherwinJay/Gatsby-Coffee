import React from 'react'
import { Link } from "gatsby"
import SEO from '../components/seo'
import Layout from "../components/layout"
import Contact from '../components/ContactUs'

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <SEO title="Contact Us" />
        <Contact />
      </Layout>
    </div>
  )
}

export default ContactPage
