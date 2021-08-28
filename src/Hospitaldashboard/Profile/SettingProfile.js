import React, { match } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { Link, Switch, Route } from 'react-router-dom'
import Faqs from './AdminProfile/Faqs'
import Terms from './AdminProfile/Terms'
import ChangePassword from '../../User/UserProfile/UserChangePassword'
import Edit from './Edit'

const SettingProfile = (props) => {
  let { } = props;
  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <>

      {
        token != null && user.userType === "Hospital" ?
          (
            <Container fluid>
            <Tab.Container defaultActiveKey="first">
              <Row>
                <Col className="tab-custom" style={{Zindex: '-1 !important',position: 'fixed', width:'28%'}}>

                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="white-text mt-2"><i class="far fa-id-card edit_icon"></i>My Information</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"><i class="fas fa-tools edit_icon"></i>Password & Security</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9} style={{position: 'relative',right: '-35%'}}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Edit />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <ChangePassword />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            </Container>
          ) :
          (
            <Container fluid>
             <Tab.Container defaultActiveKey="first">
              <Row>
                <Col className="tab-custom">

                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="white-text"><i class="far fa-id-card edit_icon"></i>My Information</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"><i class="fas fa-question-circle edit_icon"></i>FAQs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"><i class="fas fa-user-shield edit_icon"></i>Terms and Condition</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth"><i class="fas fa-tools edit_icon"></i>Password & Security</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col lg={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Edit />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Faqs />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Terms />
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <ChangePassword />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            </Container>
          )
      }



    </>
  )
}

export default SettingProfile
