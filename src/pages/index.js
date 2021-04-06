import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import KeyVisual from "../components/KeyVisual"
import ProductsSection from "../components/Home/productsSection"
import AboutUsSection from "../components/Home/aboutUsSection"
import ReservationSection from "../components/Home/reservationSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <KeyVisual />
    <AboutUsSection />
    <ReservationSection/>
    <ProductsSection />
  </Layout>
)

export default IndexPage
