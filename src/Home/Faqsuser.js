import React from 'react'
import { Col, Container, Row,Jumbotron} from 'react-bootstrap'

const Faqsuser = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12} className="text-center text-black py-5" style={{backgroundColor:'#f0f0f0'}}>
            <Jumbotron fluid md={12}>
              <h5>Frequently asked questions</h5>
            </Jumbotron>

          </Col>
          <Col className="mx-auto">
            <p>qns goes here</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Faqsuser
