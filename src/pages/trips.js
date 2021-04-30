import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Trips from "../components/Trips"

const TripsPage = () => (
  <Layout>
    <Seo title="Trips" />
    <Trips heading="Our Favorite Destinations" />
  </Layout>
)

export default TripsPage
