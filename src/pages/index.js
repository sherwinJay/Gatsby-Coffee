import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import KeyVisual from "../components/KeyVisual"
import TripsSection from "../components/Trips"
import Testimonials from "../components/Testimonials"
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
