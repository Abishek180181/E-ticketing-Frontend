import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Hospital from '../Hospital/hospital';
import SideBar from '../Navbar/Sidebar';
import Overview from '../Hospital/overview';
import Revenue from '../Hospital/revenue';
import Users from '../Hospital/users';
import Tickets from '../Hospital/tickets';
import Error from '../ProtectedRoute/error'
import Enquiry from '../Hospital/enquiry';
import SettingProfile from '../Hospitaldashboard/Profile/SettingProfile'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';

const AdminRoute = (props) => {
  let { } = props;
  const [inactive, setInactive] = useState(false);
  const user = JSON.parse(sessionStorage.getItem('user'))
  const logOut = (e) => {
    sessionStorage.clear();
    window.location.href = "/login"
  }
  return (
    <React.Fragment>

      <SideBar
        onCollapse={(inactive) => {

          setInactive(inactive);
        }}
      />

      <div className={`side-content ${inactive ? 'inactive' : ""}`}>
        <Container fluid className="fixed py-3" style={{ position: 'fixed', marginBottom: '3rem', backgroundColor: '#525a65', width: '100%', marginTop: '-5.5px' }}>
          <Row>
            <Col sm={5}></Col>
            <Col sm={3}></Col>
            <Col className="float-right">
              <Navbar expand="lg">
                {/* <Navbar.Brand href="/" className="w-25 py-3"><img src={logo} className="w-50" alt="merocare" /></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-right" style={{ float: 'right' }}>
                    <div className="pull-left">
                      {
                        user.profilePicture == "no-photo.jpg" ?
                          (
                            <>

                              <div className="userData pimage" style={{ background: "#4b1cac", backdropFilter: "blur(10px)" }}>
                                <p style={{ fontWeight: "bold", color: "white", textAlign: "center", fontSize: "14px", position: "relative", top: "8px" }}> {user.firstName.slice(0, 1)}{user.lastName.slice(0, 1)}  </p>
                              </div>

                            </>
                          ) :
                          (
                            <img className="thumbnail-image pimage"
                              src={`${process.env.REACT_APP_URL}${user.profilePicture}`}
                              alt="user pic" roundedCircle
                            />
                          )
                      }


                    </div>
                    <a href="#" className="my-auto mr-3" style={{listStyle:'None', textDecoration:'None', color:'#ffffff'}}> {user.firstName} {user.lastName}</a>
                    <Link className="my-auto ml-3" style={{listStyle:'None', textDecoration:'None', fontSize:'22px', color:'#ffffff', paddingLeft:'16px'}} onClick={(e) => { logOut(e) }}> <i class="fas fa-sign-out-alt"></i></Link>

                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
        <div style={{ marginTop: '8%' }}>
          <Switch>
            <Route path="/hospital" component={Hospital} exact></Route>
            <Route path="/overview" component={Overview} exact></Route>
            <Route path="/revenue" component={Revenue} exact></Route>
            <Route path="/users" component={Users} exact></Route>
            <Route path="/tickets" component={Tickets} exact></Route>
            <Route path="/enquiries" component={Enquiry} exact></Route>
            <Route path="/settings" component={SettingProfile} exact></Route>
            <Route component={Error} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AdminRoute
