import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import KeyVisual from "../components/KeyVisual"
import TripsSection from "../components/Trips"
import Testimonials from "../components/Testimonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <KeyVisual />
    <TripsSection />
    {/* <Testimonials /> */}
  </Layout>
)

export default IndexPage
