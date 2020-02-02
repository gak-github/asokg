import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import Image from '../components/image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (

  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      <Row>
        <Col>
          <h3>
              This page is under development using gatsby, react, react-bootstrap, and scss. Hosted on Netlify.
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md="4">
          <ListGroup>
            <Image />
          </ListGroup>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
