import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import ChangePassword from '../../Hospitaldashboard/Profile/ChangePassword'
import UserChangePassword from './UserChangePassword'
import image from '../../assets/profile.jpg'

const UserProfile = (props) => {
  let { } = props;
  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user)
  return (
    <>
      <Col sm="12" className="text-center user_info_edit p-2 mb-3">
        <h2>My Profile</h2>
      </Col>
      <Container>
        <Row className="mb-3">
          <Col sm={6}>
            <div className="text-center user_info_edit p-2 mb-3">
              <h2>My Information</h2>
            </div>
            <Col sm={12} className="text-center">
              <div className="user_pp">
                <img src={image} className="hsimage  mx-auto mb-3" />
                <Button className="user_pp_btn"><i class="fas fa-user-edit"></i></Button>
              </div>

              <h5 classsName="mt-3">{user.firstName + " " + user.lastName}</h5>
              <h5 classsName="mt-3">{user.userName}</h5>
            </Col>
            <Col sm={12} className="px-3 mt-2 cng-psw">
              <Form>
                <div className="bg-light py-2">
                  <h4 className="px-2 my-2" style={{ fontWeight: '700' }}>Personal Info</h4>
                </div>
                <Row className="mb-3 mt-2">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder={user.email} disabled />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder={user.phoneNumber} />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder={user.address} />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control placeholder={user.dob} />
                  </Form.Group>
                </Row>
                <div className="text-center">
                  <Button className="btn-edit justify-content-center" type="submit" name="submitEnquiry">
                    Update</Button>
                </div>

              </Form>
            </Col>
          </Col>
          <Col sm={6}>
            <div className="text-center user_info_edit p-2 mb-3">
              <h2>Change Password</h2>
            </div>
            <UserChangePassword />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default UserProfile
