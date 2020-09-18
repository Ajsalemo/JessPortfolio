import React, { Fragment } from "react"
import Container from "react-bootstrap/Container"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { LandingCards } from "../components/landingcards"
import SEO from "../components/seo"

const IndexPage = () => (
  <Fragment>
    <SEO
      description="A personal portfolio"
      lang="en"
      title="Jessica Perry"
    />
    <Container fluid style={{ height: "100vh" }}>
      <Header name="Jessica Perry" />
      <LandingCards />
      <Footer />
    </Container>
  </Fragment>
)

export default IndexPage
