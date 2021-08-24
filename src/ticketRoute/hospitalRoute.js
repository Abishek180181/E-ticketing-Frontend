import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'
import IssueTickets from '../Hospitaldashboard/issueTickets'
import Overview from '../Hospitaldashboard/overview'
import SettingProfile from '../Hospitaldashboard/Profile/SettingProfile'
import Revenue from '../Hospitaldashboard/revenue'
import Ticket from '../Hospitaldashboard/ticket'
import SideBar from '../Navbar/Sidebar'
import Error from '../ProtectedRoute/error'

const HospitalRoute = (props) => {
  let { } = props
  const [inactive, setInactive] = useState(false);

  return (
    <React.Fragment>
      <SideBar
        onCollapse={(inactive) => {

          setInactive(inactive);
        }}
      />
      <div className={`side-content ${inactive ? 'inactive' : ""}`}>
        <Container fluid className="fixed py-3" style={{ position: 'fixed', marginBottom: '3rem', backgroundColor:'#525a65' }}>
          <Row>
              <Col sm="12" className="text-center mb-3">

            </Col>
          </Row>
        </Container>
        <div style={{marginTop: '5%'}}>
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
    </React.Fragment>
  )
}

export default HospitalRoute
