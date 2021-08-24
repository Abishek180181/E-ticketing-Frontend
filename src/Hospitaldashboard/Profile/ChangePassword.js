import React from 'react'
import { Container, Col, Form, Row,Button } from 'react-bootstrap'

const ChangePassword = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm="12" className="text-center info_edit p-5 mb-3">
            <h2>Change Password</h2>
          </Col>
          {/* <Col sm={3}>
          </Col> */}
          <Col className="cng-psw mx-5">
            <Form>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Current Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <div className="text-center">
                <Button className="btn-edit justify-content-center w-50" type="submit" name="submitEnquiry">
                  Change Password</Button>
              </div>

            </Form>
          </Col>
          {/* <Col sm={3}>
          </Col> */}
        </Row>
      </Container>

    </div>
  )
}

export default ChangePassword
