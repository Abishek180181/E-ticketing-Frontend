import React, { useState } from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom'
import IssueTickets from '../Hospitaldashboard/issueTickets'
import Overview from '../Hospitaldashboard/overview'
import SettingProfile from '../Hospitaldashboard/Profile/SettingProfile'
import Revenue from '../Hospitaldashboard/revenue'
import Ticket from '../Hospitaldashboard/ticket'
import SideBar from '../Navbar/Sidebar'
import Error from '../ProtectedRoute/error'
import '../style.css'

const HospitalRoute = (props) => {
  let { } = props
  const [inactive, setInactive] = useState(false);
  const user = JSON.parse(sessionStorage.getItem('user'))
  const logOut = (e) => {
    sessionStorage.clear();
    localStorage.clear();
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
        <div className="fixed py-3 w-100" style={{ position: 'fixed', zIndex: "1", height: '5rem', marginBottom: '3rem', backgroundColor: '#525a65', marginTop: '-5.5px' }}>
          <Navbar className="ms-right text-right" style={{ position: 'fixed', left: '80%' }}>
            <Nav className="ms-auto">
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
              <a href="#" className="my-auto mr-3" style={{ listStyle: 'None', textDecoration: 'None', color: '#ffffff' }}> {user.firstName} <br/> <span className="pl-2" style={{fontSize:'14px',color:'#f0c0c0'}}>{user.userName}</span></a>
              <Link className="my-auto ml-3" style={{ listStyle: 'None', textDecoration: 'None', fontSize: '22px', color: '#ffffff', paddingLeft: '16px' }} onClick={(e) => { logOut(e) }}> <i class="fas fa-sign-out-alt"></i></Link>
            </Nav>
          </Navbar>
        </div>

        <div style={{ marginTop: '8%' }}>
          <Switch>
            <Route path='/issueTickets' component={IssueTickets} exact></Route>
            <Route path='/tickets' component={Ticket} exact></Route>
            <Route path="/overview" component={Overview} exact></Route>
            <Route path="/revenue" component={Revenue} exact></Route>
            <Route path="/settings" component={SettingProfile} exact></Route>
            <Route component={Error} />
          </Switch>
        </div>
      </div>
    </React.Fragment >
  )
}

export default HospitalRoute
