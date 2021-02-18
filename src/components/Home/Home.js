import React from 'react'
// React-Bootstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BsCarousel from '../Carousel/Carousel'

const Main = () => (
  <Container fluid>
    <Row className="mainrow1">
      <Col className="maincol1">
        <BsCarousel />
      </Col>
    </Row>
  </Container>
)

export default Main
