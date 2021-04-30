import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"

const AboutPage = () => (
  <Layout>
    <Seo title="About Us" />
    <Testimonials />
    <Stats />
  </Layout>
)

export default AboutPage
