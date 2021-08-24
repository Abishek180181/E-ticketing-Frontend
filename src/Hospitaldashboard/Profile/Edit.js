import React, { useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import image from '../../assets/noimage.png'

const Edit = (props) => {
  let { } = props;
  const [isLoading, setLoading] = useState(false);
  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user)
  return (
    <>
      <Container>
        {
          token != null && user.userType === 'Hospital' ?
            (
              <Row>
                <Col sm={12} className="info_edit">
                  <h3>My Information</h3>
                </Col>
                <Col sm={12} className="text-center">
                {
                  user.profilePicture!== "no-photo.jpg" ?
                    (
                      <img src={`http://localhost:90/${user.profilePicture}`} className="hsimage  mx-auto mb-3" />

                    ) :
                    (
                      <img src={image} className="hsimage  mx-auto mb-3" />

                    )
                }
                  <h5 classsName="mt-3">{user.firstName}</h5>
                  <h5 classsName="mt-3">{user.userName}</h5>
                </Col>
                <Col sm={12} className="px-3 mt-2 cng-psw">
                  <Form>
                    <div className="bg-light py-2">
                      <h4 className="px-2 my-2" style={{fontWeight:'700'}}>Hospital Info</h4>
                    </div>
                    <Row className="mb-3 mt-2">
                      <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>About Us</Form.Label>
                        <Form.Control as="textarea" rows={6} placeholder="1234 Main St" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder={user.email} />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Department</Form.Label>
                        <Form.Control type="text" placeholder="ECG" />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" disabled />
                      </Form.Group>
                      <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                      </Form.Group>

                    </Row>
                    <div className="bg-light py-2 mb-3">
                      <p className="my-auto" style={{fontWeight:'600'}}>Contact Person Information</p>
                    </div>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Contact Person Name</Form.Label>
                      <Form.Control placeholder="1234 Main St" disabled />
                    </Form.Group>
                    <Row>
                      <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                      </Form.Group>
                      <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                      </Form.Group>

                    </Row>
                    <div className="text-center">
                      <Button className="btn-edit justify-content-center" type="submit" name="submitEnquiry">
                        Update</Button>
                    </div>

                  </Form>
                </Col>
              </Row>
            ) :
            (
              <>
                <Row>
                  <Col sm={12} className="info_edit">
                    <h3>My Information</h3>
                  </Col>
                  <Col sm={12} className="text-center">
                    <img src={image} className="hsimage mx-auto mb-3" />
                    <h5 classsName="mt-3">{user.firstName}</h5>
                    <h5 classsName="mt-3">{user.userName}</h5>
                  </Col>
                  <Col sm={12} className="px-3 mt-2 cng-psw mb-5">
                    <Form>
                      <div className="bg-light py-2">
                        <h4 className="px-2 py-2" style={{fontWeight: '700'}}>Admin Info</h4>
                      </div>
                      <Form.Group className="mb-3 mt-2" controlId="formGridAddress1">
                        <Form.Label>Contact Name</Form.Label>
                        <Form.Control placeholder={user.firstName + ' ' + user.lastName} />
                      </Form.Group>
                      <Row className="mb-3 mt-2">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder={user.email} />
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control placeholder={user.phoneNumber} />
                        </Form.Group>
                      </Row>
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                          <Form.Label>Address</Form.Label>
                          <Form.Control placeholder={user.address} />
                        </Form.Group>
                    </Form>
                  </Col>
                </Row>
              </>
            )
        }
      </Container>
    </>
  )
}

export default Edit
